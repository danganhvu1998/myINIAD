(* Assembly generation *)

let list_index x lst =
  let rec list_index_iter cnt lst =
    match lst with
      hd::tl -> if hd = x then cnt else list_index_iter (cnt+1) tl
    | [] -> raise Not_found
  in list_index_iter 0 lst

let rec allocate_frame env stmts =
  let allocate_iter frames stmt =
    match stmt with
      Regalloc.SaveStmt(x, _) | Regalloc.RestoreStmt(x, _) ->
      if List.mem x frames then frames else x::frames
    | Regalloc.IfIntEqStmt(_, _, tcls, fcls) | Regalloc.IfPtrEqStmt(_, _, tcls, fcls)
    | Regalloc.IfIntNeqStmt(_, _, tcls, fcls) | Regalloc.IfPtrNeqStmt(_, _, tcls, fcls) ->
      (allocate_frame env fcls) @ (allocate_frame env tcls) @ frames
    | Regalloc.WhileIntEqStmt(_, _, cond, body) | Regalloc.WhilePtrEqStmt(_, _, cond, body)
    | Regalloc.WhileIntNeqStmt(_, _, cond, body) | Regalloc.WhilePtrNeqStmt(_, _, cond, body) ->
      (allocate_frame env body) @ (allocate_frame env cond) @ frames
    | _ -> frames
  in List.fold_left allocate_iter [] stmts

let shuffle tmp vars =
  let rec shuffle' tmp vars =
    (* find d := s where s := ... exist *)
    let dep, nodep = List.partition (fun (d, s) -> List.exists (fun (d', _) -> d' = s) vars) vars
    in let dep' = match dep with
          [] -> []
        | (d, s)::rest ->
          let rest' = List.map
              (function
                  (d', s') when d' = s -> (s, tmp)
                | (d', s') -> (d', s')) rest
          in (tmp, s)::(d, s)::(shuffle' tmp rest') (* tmp is always nodep *)
    in nodep @ dep'
  in shuffle' tmp (List.filter (fun (d, s) -> d <> s) vars)

let rec emit_stmt (ch : out_channel) (stack : string list) (stmt : Regalloc.stmt) : (string * string) list =
  match stmt with
    Regalloc.IntAddStmt(x, a, b) when x = a ->
    Printf.fprintf ch "\tadd\t%s, %s\n" (Machine.reg_int b) (Machine.reg_int x); []
  | Regalloc.IntAddStmt(x, a, b) when x = b ->
    Printf.fprintf ch "\tadd\t%s, %s\n" (Machine.reg_int a) (Machine.reg_int x); []
  | Regalloc.IntAddStmt(x, a, b) ->
    Printf.fprintf ch "\tmov\t%s, %s\n" (Machine.reg_int a) (Machine.reg_int x);
    Printf.fprintf ch "\tadd\t%s, %s\n" (Machine.reg_int b) (Machine.reg_int x); []
  | Regalloc.PtrAddStmt(x, a, b) when x = a ->
    Printf.fprintf ch "\tmovsx\t%s, %s\n" (Machine.reg_int b) (Machine.reg_ptr b);
    Printf.fprintf ch "\tadd\t%s, %s\n" (Machine.reg_ptr b) (Machine.reg_ptr x); []
  | Regalloc.PtrAddStmt(x, a, b) ->
    Printf.fprintf ch "\tmov\t%s, %s\n" (Machine.reg_ptr a) (Machine.reg_ptr x);
    Printf.fprintf ch "\tmovsx\t%s, %s\n" (Machine.reg_int b) (Machine.reg_ptr b);
    Printf.fprintf ch "\tadd\t%s, %s\n" (Machine.reg_ptr b) (Machine.reg_ptr x); []
  | Regalloc.IntSubStmt(x, a, b) when x = a ->
    Printf.fprintf ch "\tsub\t%s, %s\n" (Machine.reg_int b) (Machine.reg_int x); []
  | Regalloc.IntSubStmt(x, a, b) ->
    Printf.fprintf ch "\tmov\t%s, %s\n" (Machine.reg_int a) (Machine.reg_int x);
    Printf.fprintf ch "\tsub\t%s, %s\n" (Machine.reg_int b) (Machine.reg_int x); []
  | Regalloc.PtrSubStmt(x, a, b) when x = a ->
    Printf.fprintf ch "\tmovsx\t%s, %s\n" (Machine.reg_int b) (Machine.reg_ptr b);
    Printf.fprintf ch "\tsub\t%s, %s\n" (Machine.reg_ptr b) (Machine.reg_ptr x); []
  | Regalloc.PtrSubStmt(x, a, b) ->
    Printf.fprintf ch "\tmov\t%s, %s\n" (Machine.reg_ptr a) (Machine.reg_ptr x);
    Printf.fprintf ch "\tmovsx\t%s, %s\n" (Machine.reg_int b) (Machine.reg_ptr b);
    Printf.fprintf ch "\tsub\t%s, %s\n" (Machine.reg_ptr b) (Machine.reg_ptr x); []
  | Regalloc.IntMulStmt(x, a, b) when x = a ->
    Printf.fprintf ch "\timul\t%s, %s\n" (Machine.reg_int b) (Machine.reg_int x); []
  | Regalloc.IntMulStmt(x, a, b) ->
    Printf.fprintf ch "\tmov\t%s, %s\n" (Machine.reg_int a) (Machine.reg_int x);
    Printf.fprintf ch "\timul\t%s, %s\n" (Machine.reg_int b) (Machine.reg_int x); []
  | Regalloc.IntEqStmt(x, a, b) | Regalloc.PtrEqStmt(x, a, b)
  | Regalloc.IntNeqStmt(x, a, b) | Regalloc.PtrNeqStmt(x, a, b) ->
    failwith "not implemented"
  | Regalloc.IntVarStmt(x, y) when x = y -> []
  | Regalloc.IntVarStmt(x, y) ->
    Printf.fprintf ch "\tmov\t%s, %s\n" (Machine.reg_int y) (Machine.reg_int x); []
  | Regalloc.IntValStmt(x, v) ->
    Printf.fprintf ch "\tmov\t$%ld, %s\n" v (Machine.reg_int x); []
  | Regalloc.PtrVarStmt(x, y) when x = y -> []
  | Regalloc.PtrVarStmt(x, y) ->
    Printf.fprintf ch "\tmov\t%s, %s\n" (Machine.reg_ptr y) (Machine.reg_ptr x); []
  | Regalloc.StrValStmt(x, v) ->
    let label = Id.new_label () in
    Printf.fprintf ch "\tlea\t%s(%%rip), %s\n" label (Machine.reg_int x); [label, v]
  | Regalloc.ReturnStmt(x) when x = Machine.reg_ret ->
    Printf.fprintf ch "\tleave\n";
    Printf.fprintf ch "\tret\n"; []
  | Regalloc.ReturnStmt(x) ->
    Printf.fprintf ch "\tmov\t%s, %s\n" x Machine.reg_ret;
    Printf.fprintf ch "\tleave\n";
    Printf.fprintf ch "\tret\n"; []
  | Regalloc.IfIntEqStmt(a, b, tcls, fcls) ->
    emit_if ch stack "jne" (Machine.reg_int a) (Machine.reg_int b) tcls fcls
  | Regalloc.IfPtrEqStmt(a, b, tcls, fcls) ->
    emit_if ch stack "jne" (Machine.reg_ptr a) (Machine.reg_ptr b) tcls fcls
  | Regalloc.IfIntNeqStmt(a, b, tcls, fcls) ->
    emit_if ch stack "je" (Machine.reg_int a) (Machine.reg_int b) tcls fcls
  | Regalloc.IfPtrNeqStmt(a, b, tcls, fcls) ->
    emit_if ch stack "je" (Machine.reg_ptr a) (Machine.reg_ptr b) tcls fcls
  | Regalloc.WhileIntEqStmt(a, b, cond, body) ->
    emit_while ch stack "jne" (Machine.reg_int a) (Machine.reg_int b) cond body
  | Regalloc.WhilePtrEqStmt(a, b, cond, body) ->
    emit_while ch stack "jne" (Machine.reg_ptr a) (Machine.reg_ptr b) cond body
  | Regalloc.WhileIntNeqStmt(a, b, cond, body) ->
    emit_while ch stack "je" (Machine.reg_int a) (Machine.reg_int b) cond body
  | Regalloc.WhilePtrNeqStmt(a, b, cond, body) ->
    emit_while ch stack "je" (Machine.reg_ptr a) (Machine.reg_ptr b) cond body
  | Regalloc.FunCallStmt(ret, fname, args) ->
    let _, args' = List.fold_left
        (fun (i, args) arg -> (i+1), args @ [Machine.regs_args.(i), arg])
        (0, []) args
    in let args'' = shuffle Machine.reg_ret args' in
    List.iter (fun (d, s) ->
        Printf.fprintf ch "\tmov\t%s, %s\n" s d) args'';
    Printf.fprintf ch "\tcall\t%s\n" fname;
    if ret <> Machine.reg_ret then
      Printf.fprintf ch "\tmov\t%s, %s\n" Machine.reg_ret ret
    else (); []
  | Regalloc.SaveStmt(x, r) ->
    let index = (list_index x stack) + 1 in
    Printf.fprintf ch "\tmov\t%s, %d(%%rbp)\n" r (-8 * index); []
  | Regalloc.RestoreStmt(x, r) ->
    let index = (list_index x stack) + 1 in
    Printf.fprintf ch "\tmov\t%d(%%rbp), %s\n" (-8 * index) r; []

and emit_if ch stack jc a b tcls fcls =
  let flabel = Id.new_label () and elabel = Id.new_label () in
  Printf.fprintf ch "\tcmp\t%s, %s\n" b a;
  Printf.fprintf ch "\t%s\t%s\n" jc flabel;
  let trodata = emit_stmts ch stack tcls in
  if fcls = [] then
    begin
      Printf.fprintf ch "%s:\n" flabel; trodata
    end
  else
    begin
      Printf.fprintf ch "\tjmp\t%s\n" elabel;
      Printf.fprintf ch "%s:\n" flabel;
      let frodata = emit_stmts ch stack fcls in
      Printf.fprintf ch "%s:\n" elabel;
      trodata @ frodata
    end

and emit_while ch stack jc a b cond body =
  let slabel = Id.new_label () and elabel = Id.new_label () in
  Printf.fprintf ch "%s:\n" slabel;
  let crodata = emit_stmts ch stack cond in
  Printf.fprintf ch "\tcmp\t%s, %s\n" b a;
  Printf.fprintf ch "\t%s\t%s\n" jc elabel;
  let brodata = emit_stmts ch stack body in
  Printf.fprintf ch "\tjmp\t%s\n" slabel;
  Printf.fprintf ch "%s:\n" elabel;
  crodata @ brodata

and emit_stmts (ch : out_channel) (stack : string list) (stmts : Regalloc.stmt list) : (string * string) list =
  List.fold_left (fun rodata stmt -> rodata @ (emit_stmt ch stack stmt)) [] stmts

let emit_rodata (ch : out_channel) (label, s) =
  Printf.fprintf ch "%s:\n" label;
  Printf.fprintf ch "\t.string\t\"%s\"\n" (String.escaped s)

let emit_fundecl (ch : out_channel) ((fname, (env, funbody)) : Regalloc.fundecl) : unit =
  let stack = List.rev (allocate_frame env funbody) in
  Printf.fprintf ch "\t.text\n";
  Printf.fprintf ch "\t.globl\t%s\n" fname;
  Printf.fprintf ch "\t.type\t%s, @function\n" fname;
  Printf.fprintf ch "%s:\n" fname;
  Printf.fprintf ch "\tpush\t%%rbp\n";
  Printf.fprintf ch "\tmov\t%%rsp, %%rbp\n";
  if stack <> [] then Printf.fprintf ch "\tsub\t$%d, %%rsp\n" ((List.length stack) * 8) else ();
  let rodata = emit_stmts ch stack funbody in
  if rodata <> [] then
    begin
      (*Printf.fprintf ch "\t.rodata\n";*)
      List.iter (emit_rodata ch) rodata
    end
  else ();
  Printf.fprintf ch "\n"


let emit (ch : out_channel) ((env, fundecls) : Regalloc.prog) : unit =
  List.iter (emit_fundecl ch) fundecls
