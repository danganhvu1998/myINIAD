(* register allocation *)
(* FIXME: if/while implementation is incomplete *)

type ident = string (* = Id.t *)

type typ = Ssa.typ
type phi = Ssa.phi

type stmt =
    IntAddStmt of ident * ident * ident        (* x = y + z; *)
  | PtrAddStmt of ident * ident * ident        (* x = y + z; *)
  | IntSubStmt of ident * ident * ident        (* x = y - z; *)
  | PtrSubStmt of ident * ident * ident        (* x = y - z; *)
  | IntMulStmt of ident * ident * ident        (* x = y * z; *)
  | IntEqStmt of ident * ident * ident         (* x = (y == z); *)
  | PtrEqStmt of ident * ident * ident         (* x = (y == z); *)
  | IntNeqStmt of ident * ident * ident        (* x = (y != z); *)
  | PtrNeqStmt of ident * ident * ident        (* x = (y != z); *)                  
  | IntVarStmt of ident * ident                (* x := y; *)
  | IntValStmt of ident * int32                (* x := 1; *)
  | PtrVarStmt of ident * ident                (* x := y; *)
  | StrValStmt of ident * string               (* x := "string"; *)                  
  | ReturnStmt of ident                        (* return x; *)
  | IfIntEqStmt of ident * ident * stmt list * stmt list   (* if (x == y) {...} else {...}; phi *)
  | IfPtrEqStmt of ident * ident * stmt list * stmt list   (* if (x == y) {...} else {...}; phi *)
  | IfIntNeqStmt of ident * ident * stmt list * stmt list  (* if (x != y) {...} else {...}; phi *)
  | IfPtrNeqStmt of ident * ident * stmt list * stmt list  (* if (x != y) {...} else {...}; phi *)
  | WhileIntEqStmt of ident * ident * stmt list * stmt list   (* while (phi, ..., x == y) {...} *)
  | WhilePtrEqStmt of ident * ident * stmt list * stmt list   (* while (phi, ..., x == y) {...} *)
  | WhileIntNeqStmt of ident * ident * stmt list * stmt list  (* while (phi,..., x != y) {...} *)
  | WhilePtrNeqStmt of ident * ident * stmt list * stmt list  (* while (phi,..., x != y) {...} *)
  | FunCallStmt of ident * ident * ident list  (* z := foo(x, y); *)
  | SaveStmt of ident * ident
  | RestoreStmt of ident * ident

type funbody = Typing.typenv * stmt list               (* i = 1; return i; *)
type fundecl = ident * funbody

type prog = Typing.typenv * fundecl list

(******)

module Strmap = Map.Make(String)
module Strset = Set.Make(String)
type mappings = string Strmap.t

let uniq lst =
  let rec uniq_iter result lst =
    match lst with
      hd::tl -> if List.mem hd result then uniq_iter result tl else uniq_iter (hd::result) tl
    | [] -> result
  in List.rev (uniq_iter [] lst)

let revfind r regenv =
  match Strmap.fold (fun k v lst -> if v = r then k::lst else lst) regenv [] with
    [one] -> one
  | [] -> raise Not_found
  | _ -> failwith "should not happen (same register used)"

type alloc_result =
    Reg of string                     (* already there *)
  | Alloc of string                   (* allocate new register *)
  | Spill of string * string          (* spills variables *)

let rec collect_fvars_stmt stmt set =
  match stmt with
    Ssa.IntAddStmt(x, a, b) | Ssa.PtrAddStmt(x, a, b) | Ssa.IntSubStmt(x, a, b) | Ssa.PtrSubStmt(x, a, b)
  | Ssa.IntMulStmt(x, a, b) | Ssa.IntEqStmt(x, a, b) | Ssa.PtrEqStmt(x, a, b)
  | Ssa.IntNeqStmt(x, a, b) | Ssa.PtrNeqStmt(x, a, b) ->
    set |> Strset.add a |> Strset.add b |> Strset.remove x
  | Ssa.IntVarStmt(x, a) | Ssa.PtrVarStmt(x, a)  ->
    Strset.add a set |> Strset.remove x
  | Ssa.IntValStmt(x, _) | Ssa.StrValStmt(x, _) -> Strset.remove x set
  | Ssa.ReturnStmt(a) -> Strset.add a set
  | Ssa.IfIntEqStmt(a, b, tcls, fcls, phis) | Ssa.IfPtrEqStmt(a, b, tcls, fcls, phis)
  | Ssa.IfIntNeqStmt(a, b, tcls, fcls, phis) | Ssa.IfPtrNeqStmt(a, b, tcls, fcls, phis) ->
    let set' = List.fold_left (fun set (x, y, z) -> set |> Strset.add y |> Strset.add z |> Strset.remove x) set phis in
    let set'' = Strset.union (collect_fvars_stmts tcls set') (collect_fvars_stmts fcls set') in
    set'' |> Strset.add a |> Strset.add b
  | Ssa.WhileIntEqStmt(a, b, cond, body, phis) | Ssa.WhilePtrEqStmt(a, b, cond, body, phis)
  | Ssa.WhileIntNeqStmt(a, b, cond, body, phis) | Ssa.WhilePtrNeqStmt(a, b, cond, body, phis) ->
    let set' = List.fold_left (fun set (x, y, z) -> set |> Strset.add y |> Strset.add z |> Strset.remove x)
        (collect_fvars_stmts cond set) phis in
    let set'' = List.fold_left (fun set (x, y, z) -> set |> Strset.add y |> Strset.add z |> Strset.remove x)
        (collect_fvars_stmts cond (collect_fvars_stmts body set')) phis in
    Strset.union set' set''
  | Ssa.FunCallStmt(x, _, args) ->
    List.fold_left (fun set a -> Strset.add a set) set args |> Strset.remove x
  
and collect_fvars_stmts stmts set =
  List.fold_right (fun stmt set -> collect_fvars_stmt stmt set) stmts set

let collect_fvars stmts = collect_fvars_stmts stmts Strset.empty


let target_regs x rest regenv fvars =
  let rec target_iter rest like =
    match rest with
      [] -> like
    | stmt::stmts ->
      begin
        match stmt with
          Ssa.ReturnStmt(a) when x = a -> target_iter stmts (like @ [Machine.reg_ret])
        | Ssa.FunCallStmt(_, _, args) ->
          let rec find_reg_iter lst cnt =
            match lst with
              hd::_ when hd = x -> [Machine.regs_args.(cnt)]
            | _::tl -> find_reg_iter tl (cnt+1)
            | [] -> []
          in like @ (find_reg_iter args 0) (* ignore rest of the statements, as all registers are spilled after funcall *)
        | Ssa.IfIntEqStmt(_, _, tcls, fcls, phis) | Ssa.IfPtrEqStmt(_, _, tcls, fcls, phis)
        | Ssa.IfIntNeqStmt(_, _, tcls, fcls, phis) | Ssa.IfPtrNeqStmt(_, _, tcls, fcls, phis) ->
          like (* FIXME: not implemented *)
        | Ssa.WhileIntEqStmt(_, _, cond, body, phis) | Ssa.WhilePtrEqStmt(_, _, cond, body, phis)
        | Ssa.WhileIntNeqStmt(_, _, cond, body, phis) | Ssa.WhilePtrNeqStmt(_, _, cond, body, phis) ->
          like (* FIXME: not implemented *)
        | _ -> target_iter stmts like
      end
  in target_iter rest []

let suggest_regs x rest regenv fvars preferred =
  uniq ((target_regs x rest regenv fvars) @ preferred @ Machine.regs_all_lst)


let allocate x rest regenv fvars preferred keepvars =
  try
    let r = Strmap.find x regenv
    in Reg(r)
  with Not_found ->
    (* Regs in the order of preference *)
    let regs = suggest_regs x rest regenv fvars preferred in
    try
      (* find one stale (non-live) register; register not used or register no longer used *)
      let r = List.find
          (fun reg -> Strset.for_all
              (fun x ->
                 try Strmap.find x regenv <> reg
                 with Not_found -> true)
              fvars)
          regs
      in Alloc(r)
    with Not_found ->
      (* find register variable to spill; register in use, but whose variable is not needed to keep *)
      let r = List.find
          (fun reg -> Strmap.for_all
              (fun x r -> if reg = r then not (List.mem x keepvars) else true)
              regenv)
          regs in
      Spill(revfind r regenv, r)


(* Preparing for dest := src1 `op` src2 `op` ... `op` srcN; tries to coalesce registers for src1 and dest *)
let prepare_operands dest srcs rest regenv fvars =
  let rs, regenv', stmts, keepvars = 
    List.fold_left (fun (rs, renv, stmts, kvars) src ->
        let r, stmt, renv' = 
          match allocate src rest renv fvars [] kvars with
            Reg(r) -> r, [], renv
          | Alloc(r) -> r, [RestoreStmt(src, r)], Strmap.add src r renv
          | Spill(x, r) -> r, [SaveStmt(x, r); RestoreStmt(src, r)], Strmap.add src r (Strmap.remove x renv)
        in (rs @ [r], renv', stmts @ stmt, src::kvars))
      ([], regenv, [], []) srcs
  in let preferred =
       match rs with
         r::_ -> [r]
       | [] -> []
  in match allocate dest rest regenv' fvars preferred keepvars with
    Reg(r) -> failwith "should not happen (if SSA)"
  | Alloc(r) -> stmts, Strmap.add dest r regenv'
  | Spill(x, r) -> stmts @ [SaveStmt(x, r)], Strmap.add dest r (Strmap.remove x regenv')


let rec convert_stmt (stmt : Ssa.stmt) (rest : Ssa.stmt list) (regenv : mappings) : stmt list * mappings =
  let fvars = collect_fvars rest in
  match stmt with
    Ssa.IntAddStmt(x, a, b) ->
    let stmts, regenv' = prepare_operands x [a; b] rest regenv fvars in
    stmts @ [IntAddStmt(Strmap.find x regenv', Strmap.find a regenv', Strmap.find b regenv')], regenv'
  | Ssa.PtrAddStmt(x, a, b) ->
    let stmts, regenv' = prepare_operands x [a; b] rest regenv fvars in
    stmts @ [PtrAddStmt(Strmap.find x regenv', Strmap.find a regenv', Strmap.find b regenv')], regenv'
  | Ssa.IntSubStmt(x, a, b) ->
    let stmts, regenv' = prepare_operands x [a; b] rest regenv fvars in
    stmts @ [IntSubStmt(Strmap.find x regenv', Strmap.find a regenv', Strmap.find b regenv')], regenv'
  | Ssa.PtrSubStmt(x, a, b) ->
    let stmts, regenv' = prepare_operands x [a; b] rest regenv fvars in
    stmts @ [PtrSubStmt(Strmap.find x regenv', Strmap.find a regenv', Strmap.find b regenv')], regenv'
  | Ssa.IntMulStmt(x, a, b) ->
    let stmts, regenv' = prepare_operands x [a; b] rest regenv fvars in
    stmts @ [IntMulStmt(Strmap.find x regenv', Strmap.find a regenv', Strmap.find b regenv')], regenv'
  | Ssa.IntEqStmt(x, a, b) ->
    let stmts, regenv' = prepare_operands x [a; b] rest regenv fvars in
    stmts @ [IntEqStmt(Strmap.find x regenv', Strmap.find a regenv', Strmap.find b regenv')], regenv'
  | Ssa.PtrEqStmt(x, a, b) ->
    let stmts, regenv' = prepare_operands x [a; b] rest regenv fvars in
    stmts @ [PtrEqStmt(Strmap.find x regenv', Strmap.find a regenv', Strmap.find b regenv')], regenv'
  | Ssa.IntNeqStmt(x, a, b) ->
    let stmts, regenv' = prepare_operands x [a; b] rest regenv fvars in
    stmts @ [IntNeqStmt(Strmap.find x regenv', Strmap.find a regenv', Strmap.find b regenv')], regenv'
  | Ssa.PtrNeqStmt(x, a, b) ->
    let stmts, regenv' = prepare_operands x [a; b] rest regenv fvars in
    stmts @ [PtrNeqStmt(Strmap.find x regenv', Strmap.find a regenv', Strmap.find b regenv')], regenv'
  | Ssa.IntVarStmt(x, a) ->
    let stmts, regenv' = prepare_operands x [a] rest regenv fvars in
    stmts @ [IntVarStmt(Strmap.find x regenv', Strmap.find a regenv')], regenv'
  | Ssa.IntValStmt(x, v) ->
    let stmts, regenv' = prepare_operands x [] rest regenv fvars in
    stmts @ [IntValStmt(Strmap.find x regenv', v)], regenv'
  | Ssa.PtrVarStmt(x, a) ->
    let stmts, regenv' = prepare_operands x [a] rest regenv fvars in
    stmts @ [PtrVarStmt(Strmap.find x regenv', Strmap.find a regenv')], regenv'
  | Ssa.StrValStmt(x, v) ->
    let stmts, regenv' = prepare_operands x [] rest regenv fvars in
    stmts @ [StrValStmt(Strmap.find x regenv', v)], regenv'
  | Ssa.ReturnStmt(x) ->
    begin
      match allocate x rest regenv fvars [Machine.reg_ret] [] with
        Reg(r) -> [ReturnStmt(r)], regenv
      | Alloc(r) -> [RestoreStmt(x, r); ReturnStmt(r)], Strmap.add x r regenv
      | Spill(y, r) -> [SaveStmt(y, r); RestoreStmt(x, r); ReturnStmt(r)],
                       Strmap.add x r (Strmap.remove y regenv)
    end
  | Ssa.FunCallStmt(x, fname, args) ->
    begin
      (* save all fvars *)
      let _, savestmts = Strset.fold
          (fun x (renv, stmts) ->
             if Strmap.mem x renv then Strmap.remove x renv, SaveStmt(x, Strmap.find x regenv)::stmts
             else renv, stmts)
          fvars (regenv, []) in
      (* allocate all args (no save required here, as all fvars are saved already) *)
      let n, rs, _, restorestmts = 
        List.fold_left (fun (i, rs, renv, stmts) arg ->
            let r, stmt, renv' = 
              match allocate arg [] renv fvars [Machine.regs_args.(i)] args with
                Reg(r) -> r, [], renv
              | Alloc(r) -> r, [RestoreStmt(arg, r)], Strmap.add arg r renv
              | Spill(x, r) -> r, [RestoreStmt(arg, r)], Strmap.add arg r (Strmap.remove x renv)
            in (i+1, rs @ [r], renv', stmts @ stmt))
          (0, [], regenv, []) args
      and regenv' = Strmap.add x Machine.reg_ret Strmap.empty
      in savestmts @ restorestmts @ [FunCallStmt(Machine.reg_ret, fname, rs)], regenv'
    end
  | Ssa.IfIntEqStmt(a, b, tcls, fcls, phis) ->
    let saves, ra, rb, tcls', fcls', regenv' = convert_if a b tcls fcls phis rest regenv fvars in
    saves @ [IfIntEqStmt(ra, rb, tcls', fcls')], regenv'
  | Ssa.IfPtrEqStmt(a, b, tcls, fcls, phis) ->
    let saves, ra, rb, tcls', fcls', regenv' = convert_if a b tcls fcls phis rest regenv fvars in
    saves @ [IfPtrEqStmt(ra, rb, tcls', fcls')], regenv'
  | Ssa.IfIntNeqStmt(a, b, tcls, fcls, phis) ->
    let saves, ra, rb, tcls', fcls', regenv' = convert_if a b tcls fcls phis rest regenv fvars in
    saves @ [IfIntNeqStmt(ra, rb, tcls', fcls')], regenv'
  | Ssa.IfPtrNeqStmt(a, b, tcls, fcls, phis) ->
    let saves, ra, rb, tcls', fcls', regenv' = convert_if a b tcls fcls phis rest regenv fvars in
    saves @ [IfPtrNeqStmt(ra, rb, tcls', fcls')], regenv'
  | Ssa.WhileIntEqStmt(a, b, cond, body, phis) ->
    let ra, rb, cond', body', regenv' = convert_while a b cond body phis rest regenv fvars in
    [WhileIntEqStmt(ra, rb, cond', body')], regenv'
  | Ssa.WhilePtrEqStmt(a, b, cond, body, phis) ->
    let ra, rb, cond', body', regenv' = convert_while a b cond body phis rest regenv fvars in
    [WhilePtrEqStmt(ra, rb, cond', body')], regenv'
  | Ssa.WhileIntNeqStmt(a, b, cond, body, phis) ->
    let ra, rb, cond', body', regenv' = convert_while a b cond body phis rest regenv fvars in
    [WhileIntNeqStmt(ra, rb, cond', body')], regenv'
  | Ssa.WhilePtrNeqStmt(a, b, cond, body, phis) ->
    let ra, rb, cond', body', regenv' = convert_while a b cond body phis rest regenv fvars in
    [WhilePtrNeqStmt(ra, rb, cond', body')], regenv'


and convert_if a b tcls fcls phis rest regenv fvars =
  let fvars' = collect_fvars_stmt (Ssa.IfIntEqStmt(a, b, tcls, fcls, phis)) fvars
  (* Assign registers to a, b *)
  in let ra, stmta, regenv =
    match allocate a rest regenv fvars' [] [] with
      Reg(r) -> r, [], regenv
    | Alloc(r) -> r, [RestoreStmt(a, r)], Strmap.add a r regenv
    | Spill(x, r) -> r, [SaveStmt(x, r); RestoreStmt(a, r)], Strmap.add a r regenv
  in let rb, stmtb, regenv =
    match allocate b rest regenv fvars' [] [a] with
      Reg(r) -> r, [], regenv
    | Alloc(r) -> r, [RestoreStmt(b, r)], Strmap.add b r regenv
    | Spill(x, r) -> r, [SaveStmt(x, r); RestoreStmt(b, r)], Strmap.add b r regenv
  (* Assign registers to both clauses *)
  in let tcls', regenv1 =
       let rest' = List.fold_left (fun stmts (x, y, z) -> List.map (Ssa.replace_freevar_stmt x y) stmts) rest phis
       in convert_stmt_list tcls rest' regenv
  in let fcls', regenv2 =
       let rest' = List.fold_left (fun stmts (x, y, z) -> List.map (Ssa.replace_freevar_stmt x z) stmts) rest phis
       in convert_stmt_list fcls rest' regenv
  (* Rename phi variables *)
  in let regenv1' =
        List.fold_left (fun m (x, y, z) ->
            try let r = Strmap.find y m in Strmap.add x r (Strmap.remove y m)
            with Not_found -> m)
          regenv1 phis
  in let regenv2' = 
       List.fold_left (fun m (x, y, z) ->
           try let r = Strmap.find z m in Strmap.add x r (Strmap.remove z m)
           with Not_found -> m)
         regenv2 phis
  (* Merge regenv1' and regenv2' *)
  in let tsave = ref [] and fsave = ref []
  in let merge_elem k r1opt r2opt =
       if Strset.mem k fvars then
         match r1opt, r2opt with
           Some(r1), Some(r2) when r1 = r2 -> Some(r1)
         | Some(r1), Some(r2) ->
           tsave := [SaveStmt(k, r1)]::!tsave; fsave := [SaveStmt(k, r2)]::!fsave; None
         | Some(r1), None -> tsave := [SaveStmt(k, r1)]::!tsave; None
         | None, Some(r2) -> fsave := [SaveStmt(k, r2)]::!fsave; None
         | None, None -> None
       else None
  in let regenv' = Strmap.merge merge_elem regenv1' regenv2'
  in (stmta @ stmtb), ra, rb, tcls', fcls', regenv'


and convert_while a b cond body phis rest regenv fvars =
  let fvars' = collect_fvars_stmts (Ssa.IfIntEqStmt(a, b, [], [], []) :: body @ rest @ cond) fvars
  (* Rename phi variables *)
  in let regenv1' =
    List.fold_left (fun m (x, y, z) ->
        try let r = Strmap.find y m in Strmap.add x r (Strmap.remove y m)
        with Not_found -> m)
      regenv phis
  (* Convert cond *)
  in let cond', regenv' =
       convert_stmt_list cond (Ssa.IfIntEqStmt(a, b, [], [], []) :: body @ rest @ cond) regenv1'
  (* Assign registers to a, b *)
  in let ra, stmta, regenv'' =
    match allocate a (body @ rest @ cond) regenv' fvars' [] [] with
      Reg(r) -> r, [], regenv'
    | Alloc(r) -> r, [RestoreStmt(a, r)], Strmap.add a r regenv'
    | Spill(x, r) -> r, [SaveStmt(x, r); RestoreStmt(a, r)], Strmap.add a r regenv'
  in let rb, stmtb, regenv'' =
    match allocate b (body @ rest @ cond) regenv'' fvars' [] [a] with
      Reg(r) -> r, [], regenv''
    | Alloc(r) -> r, [RestoreStmt(b, r)], Strmap.add b r regenv''
    | Spill(x, r) -> r, [SaveStmt(x, r); RestoreStmt(b, r)], Strmap.add b r regenv''
  (* Convert body *)
  in let body', regenv2 =
       convert_stmt_list body (cond @ body @ rest) regenv''
  (* Rename phi variables *)
  in let regenv2' = 
       List.fold_left (fun m (x, y, z) ->
           try let r = Strmap.find z m in Strmap.add x r (Strmap.remove z m)
           with Not_found -> m)
         regenv2 phis
  (* Merge regenv1' and regenv2' *)
  in let save = ref [] and restore = ref []
  in let merge_elem k r1opt r2opt =
       if Strset.mem k fvars' then
         match r1opt, r2opt with
           Some(r1), Some(r2) when r1 = r2 -> Some(r1)
         | Some(r1), Some(r2) ->
           (* FIXME: should implement register shuffling *)
           (* FIXME: type ignored and IntVarStmt is always used *)
           begin
             try
               let k' = revfind r1 regenv2' in
               if Strset.mem k' fvars'
               then (save := SaveStmt(k, r2)::!save; restore := RestoreStmt(k, r1)::!restore; None)
               else (restore := IntVarStmt(r1, r2)::!restore; None)
             with Not_found ->
               (restore := IntVarStmt(r1, r2)::!restore; None)
           end
         | Some(r1), None ->
           restore := RestoreStmt(k, r1)::!restore; None
         | None, Some(r2) ->
           save := SaveStmt(k, r2)::!save; None
         | None, None ->None
       else None
  in let regenv' = Strmap.merge merge_elem regenv1' regenv2'
  in ra, rb, (cond' @ stmta @ stmtb), (body' @ !save @ !restore), regenv'


and convert_stmt_list stmts cont regenv =
  match stmts with
    first::rest ->
    let first', regenv' = convert_stmt first (rest @ cont) regenv in
    let rest', regenv'' = convert_stmt_list rest cont regenv'
    in first' @ rest', regenv''
  | [] -> [], regenv


let convert_fundecl ((name, args, (env, stmts)) : Ssa.fundecl) : fundecl =
  let regenv = Strmap.empty in
  let _, regenv' = List.fold_left
      (fun (i, e) arg -> (i+1), (Strmap.add arg Machine.regs_args.(i) e))
      (0, regenv) args
  in let stmts', regenv'' = convert_stmt_list stmts [] regenv'
         in (name, (env, stmts'))

let convert ((env, fundecls) : Ssa.prog) : prog =
  env, List.map (fun decl -> convert_fundecl decl) fundecls
