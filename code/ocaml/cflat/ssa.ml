(* SSA form *)

type ident = string (* = Id.t *)

type typ = Knormal.typ

type phi = ident * ident * ident               (* x := phi(y, z); *)

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
  | IfIntEqStmt of ident * ident * stmt list * stmt list * phi list   (* if (x == y) {...} else {...}; phi *)
  | IfPtrEqStmt of ident * ident * stmt list * stmt list * phi list   (* if (x == y) {...} else {...}; phi *)
  | IfIntNeqStmt of ident * ident * stmt list * stmt list * phi list  (* if (x != y) {...} else {...}; phi *)
  | IfPtrNeqStmt of ident * ident * stmt list * stmt list * phi list  (* if (x != y) {...} else {...}; phi *)
  | WhileIntEqStmt of ident * ident * stmt list * stmt list * phi list   (* while (phi, ..., x == y) {...} *)
  | WhilePtrEqStmt of ident * ident * stmt list * stmt list * phi list   (* while (phi, ..., x == y) {...} *)
  | WhileIntNeqStmt of ident * ident * stmt list * stmt list * phi list  (* while (phi,..., x != y) {...} *)
  | WhilePtrNeqStmt of ident * ident * stmt list * stmt list * phi list  (* while (phi,..., x != y) {...} *)
  | FunCallStmt of ident * ident * ident list  (* z := foo(x, y); *)

type funbody = Typing.typenv * stmt list               (* i = 1; return i; *)
type fundecl = ident * ident list * funbody

type prog = Typing.typenv * fundecl list

(******)

module Strmap = Map.Make(String)
type mappings = string Strmap.t

let find mappings x = try Strmap.find x mappings with Not_found -> x
let rename mappings x =
  let x' = Id.new_var () in (x', (Strmap.add x x' mappings))

let join_mappings m1 m2 =
  let phi = ref [] in
  let merge_elem k v1opt v2opt =
    match v1opt, v2opt with
      Some(v1), Some(v2) when v1 <> v2 ->
      let v3 = Id.new_var () in
      phi := (v3, v1, v2)::(!phi);
      Some(v3)
    | Some(v1), Some(v2) -> Some(v1)
    | Some(v), None | None, Some(v) -> Some(v)
    | None, None -> None
  in let m' = Strmap.merge merge_elem m1 m2
  in m', !phi


let rec replace_freevar_phis v v' phis =
  List.map (fun (x, y, z) -> (x, (if y = v then v' else y), (if z = v then v' else z))) phis

and replace_freevar_stmt v v' stmt =
  match stmt with
    IntAddStmt(x, y, z) -> IntAddStmt(x, (if y = v then v' else y), (if z = v then v' else z))
  | PtrAddStmt(x, y, z) -> PtrAddStmt(x, (if y = v then v' else y), (if z = v then v' else z))
  | IntSubStmt(x, y, z) -> IntSubStmt(x, (if y = v then v' else y), (if z = v then v' else z))
  | PtrSubStmt(x, y, z) -> PtrSubStmt(x, (if y = v then v' else y), (if z = v then v' else z))
  | IntMulStmt(x, y, z) -> IntMulStmt(x, (if y = v then v' else y), (if z = v then v' else z))
  | IntEqStmt(x, y, z) -> IntEqStmt(x, (if y = v then v' else y), (if z = v then v' else z))
  | PtrEqStmt(x, y, z) -> PtrEqStmt(x, (if y = v then v' else y), (if z = v then v' else z))
  | IntNeqStmt(x, y, z) -> IntNeqStmt(x, (if y = v then v' else y), (if z = v then v' else z))
  | PtrNeqStmt(x, y, z) -> PtrNeqStmt(x, (if y = v then v' else y), (if z = v then v' else z))
  | IntVarStmt(x, y) -> IntVarStmt(x, (if y = v then v' else y))
  | PtrVarStmt(x, y) -> PtrVarStmt(x, (if y = v then v' else y))
  | IntValStmt(_, _) | StrValStmt(_, _) -> stmt
  | ReturnStmt(x) -> ReturnStmt(if x = v then v' else x)
  | IfIntEqStmt(x, y, tcls, fcls, phis) ->
    IfIntEqStmt((if x = v then v' else x), (if y = v then v' else y),
                replace_freevar_stmts v v' tcls, replace_freevar_stmts v v' fcls,
                replace_freevar_phis v v' phis)
  | IfPtrEqStmt(x, y, tcls, fcls, phis) ->
    IfPtrEqStmt((if x = v then v' else x), (if y = v then v' else y),
                replace_freevar_stmts v v' tcls, replace_freevar_stmts v v' fcls,
                replace_freevar_phis v v' phis)
  | IfIntNeqStmt(x, y, tcls, fcls, phis) ->
    IfIntNeqStmt((if x = v then v' else x), (if y = v then v' else y),
                 replace_freevar_stmts v v' tcls, replace_freevar_stmts v v' fcls,
                 replace_freevar_phis v v' phis)
  | IfPtrNeqStmt(x, y, tcls, fcls, phis) ->
    IfPtrNeqStmt((if x = v then v' else x), (if y = v then v' else y),
                 replace_freevar_stmts v v' tcls, replace_freevar_stmts v v' fcls,
                 replace_freevar_phis v v' phis)
  | WhileIntEqStmt(x, y, cond, blk, phis) ->
    WhileIntEqStmt((if x = v then v' else x), (if y = v then v' else y),
                   replace_freevar_stmts v v' cond, replace_freevar_stmts v v' blk,
                   replace_freevar_phis v v' phis)
  | WhilePtrEqStmt(x, y, cond, blk, phis) ->
    WhilePtrEqStmt((if x = v then v' else x), (if y = v then v' else y),
                   replace_freevar_stmts v v' cond, replace_freevar_stmts v v' blk,
                   replace_freevar_phis v v' phis)
  | WhileIntNeqStmt(x, y, cond, blk, phis) ->
    WhileIntNeqStmt((if x = v then v' else x), (if y = v then v' else y),
                    replace_freevar_stmts v v' cond, replace_freevar_stmts v v' blk,
                    replace_freevar_phis v v' phis)
  | WhilePtrNeqStmt(x, y, cond, blk, phis) ->
    WhilePtrNeqStmt((if x = v then v' else x), (if y = v then v' else y),
                    replace_freevar_stmts v v' cond, replace_freevar_stmts v v' blk,
                    replace_freevar_phis v v' phis)
  | FunCallStmt(x, fname, args) ->
    FunCallStmt(x, (if fname = v then v' else fname),
                List.map (fun x -> if x = v then v' else x) args)

and replace_freevar_stmts v v' stmts = List.map (replace_freevar_stmt v v') stmts

and replace_freevars phis stmts =
  List.fold_left (fun result (x, y, z) ->
      (replace_freevar_stmts z x (replace_freevar_stmts y x result)))
    stmts phis


let rec convert_stmt (m : mappings) (stmt : Knormal.stmt) : mappings * stmt =
  match stmt with
    Knormal.IntAddStmt(x, a, b) ->
    let x', m' = rename m x in m', IntAddStmt(x', find m a, find m b)
  | Knormal.PtrAddStmt(x, a, b) ->
    let x', m' = rename m x in m', PtrAddStmt(x', find m a, find m b)
  | Knormal.IntSubStmt(x, a, b) ->
    let x', m' = rename m x in m', IntSubStmt(x', find m a, find m b)
  | Knormal.PtrSubStmt(x, a, b) ->
    let x', m' = rename m x in m', PtrSubStmt(x', find m a, find m b)
  | Knormal.IntMulStmt(x, a, b) ->
    let x', m' = rename m x in m', IntMulStmt(x', find m a, find m b)
  | Knormal.IntEqStmt(x, a, b) ->
    let x', m' = rename m x in m', IntEqStmt(x', find m a, find m b)
  | Knormal.PtrEqStmt(x, a, b) ->
    let x', m' = rename m x in m', PtrEqStmt(x', find m a, find m b)
  | Knormal.IntNeqStmt(x, a, b) ->
    let x', m' = rename m x in m', IntNeqStmt(x', find m a, find m b)
  | Knormal.PtrNeqStmt(x, a, b) ->
    let x', m' = rename m x in m', PtrNeqStmt(x', find m a, find m b)
  | Knormal.IntVarStmt(x, y) ->
    let x', m' = rename m x in m', IntVarStmt(x', find m y)
  | Knormal.IntValStmt(x, v) ->
    let x', m' = rename m x in m', IntValStmt(x', v)
  | Knormal.PtrVarStmt(x, y) ->
    let x', m' = rename m x in m', PtrVarStmt(x', find m y)
  | Knormal.StrValStmt(x, v) ->
    let x', m' = rename m x in m', StrValStmt(x', v)
  | Knormal.ReturnStmt(x) -> m, ReturnStmt(find m x)
  | Knormal.IfIntEqStmt(x, y, tcls, fcls) ->
    let mt, tcls' = convert_stmt_list m tcls
    and mf, fcls' = convert_stmt_list m fcls in
    let m', phi = join_mappings mt mf in
    m', IfIntEqStmt(find m x, find m y, tcls', fcls', phi)
  | Knormal.IfPtrEqStmt(x, y, tcls, fcls) ->
    let mt, tcls' = convert_stmt_list m tcls
    and mf, fcls' = convert_stmt_list m fcls in
    let m', phi = join_mappings mt mf in
    m', IfPtrEqStmt(find m x, find m y, tcls', fcls', phi)
  | Knormal.IfIntNeqStmt(x, y, tcls, fcls) ->
    let mt, tcls' = convert_stmt_list m tcls
    and mf, fcls' = convert_stmt_list m fcls in
    let m', phi = join_mappings mt mf in
    m', IfIntNeqStmt(find m x, find m y, tcls', fcls', phi)
  | Knormal.IfPtrNeqStmt(x, y, tcls, fcls) ->
    let mt, tcls' = convert_stmt_list m tcls
    and mf, fcls' = convert_stmt_list m fcls in
    let m', phi = join_mappings mt mf in
    m', IfPtrNeqStmt(find m x, find m y, tcls', fcls', phi)
  | Knormal.WhileIntEqStmt(x, y, cond, blk) ->
    let mc, cond' = convert_stmt_list m cond in
    let mb, blk' = convert_stmt_list mc blk in
    let m', phi = join_mappings m mb in
    m', WhileIntEqStmt(find m' x, find m' y, replace_freevars phi cond', replace_freevars phi blk', phi)
  | Knormal.WhilePtrEqStmt(x, y, cond, blk) ->
    let mc, cond' = convert_stmt_list m cond in
    let mb, blk' = convert_stmt_list mc blk in
    let m', phi = join_mappings m mb in
    m', WhilePtrEqStmt(find m' x, find m' y, replace_freevars phi cond', replace_freevars phi blk', phi)
  | Knormal.WhileIntNeqStmt(x, y, cond, blk) ->
    let mc, cond' = convert_stmt_list m cond in
    let mb, blk' = convert_stmt_list mc blk in
    let m', phi = join_mappings m mb in
    m', WhileIntNeqStmt(find m' x, find m' y, replace_freevars phi cond', replace_freevars phi blk', phi)
  | Knormal.WhilePtrNeqStmt(x, y, cond, blk) ->
    let mc, cond' = convert_stmt_list m cond in
    let mb, blk' = convert_stmt_list mc blk in
    let m', phi = join_mappings m mb in
    m', WhilePtrNeqStmt(find m' x, find m' y, replace_freevars phi cond', replace_freevars phi blk', phi)
  | Knormal.FunCallStmt(x, fname, args) ->
    let x', m' = rename m x in m', FunCallStmt(x', fname, List.map (find m) args)

and convert_stmt_list (mappings : mappings) (stmts : Knormal.stmt list) : mappings * stmt list =
  List.fold_left
    (fun (m, result) s ->
      let m', s' = convert_stmt m s in (m', result @ [s'])) (mappings, []) stmts

let convert_fundecl (mappings : mappings) ((name, args, (env, stmts)) : Knormal.fundecl) : fundecl =
  let mappings', args' =
    List.fold_left
      (fun (m, args) arg ->
         let arg', m' = rename m arg in (m', args @ [arg']))
      (mappings, []) args
  in let mappings'', stmts' = convert_stmt_list mappings' stmts
  in (name, args', (env, stmts'))

let convert ((env, fundecls) : Knormal.prog) : prog =
  env, List.map (fun decl -> convert_fundecl Strmap.empty decl) fundecls
