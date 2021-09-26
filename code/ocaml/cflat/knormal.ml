(* K-normal form *)

type ident = string (* = Id.t *)

type typ = Typing.typ

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
  | IfIntEqStmt of ident * ident * stmt list * stmt list   (* if (x == y) {...} else {...} *)
  | IfPtrEqStmt of ident * ident * stmt list * stmt list   (* if (x == y) {...} else {...} *)
  | IfIntNeqStmt of ident * ident * stmt list * stmt list  (* if (x != y) {...} else {...} *)
  | IfPtrNeqStmt of ident * ident * stmt list * stmt list  (* if (x != y) {...} else {...} *)
  | WhileIntEqStmt of ident * ident * stmt list * stmt list   (* while (..., x == y) {...} *)
  | WhilePtrEqStmt of ident * ident * stmt list * stmt list   (* while (..., x == y) {...} *)
  | WhileIntNeqStmt of ident * ident * stmt list * stmt list  (* while (..., x != y) {...} *)
  | WhilePtrNeqStmt of ident * ident * stmt list * stmt list  (* while (..., x != y) {...} *)
  | FunCallStmt of ident * ident * ident list  (* z := foo(x, y); *)

type funbody = Typing.typenv * stmt list               (* i = 1; return i; *)
type fundecl = ident * ident list * funbody

type prog = Typing.typenv * fundecl list

(******)

let rec convert_expr (name : ident) (expr : Typing.expr) : stmt list =
  match expr with
    Typing.IntImmExpr(i) -> [IntValStmt(name, i)]
  | Typing.StrImmExpr(s) -> [StrValStmt(name, s)]
  | Typing.IntVarExpr(x) -> [IntVarStmt(name, x)]
  | Typing.PtrVarExpr(x) -> [PtrVarStmt(name, x)]
  | Typing.FunCallExpr(fname, argexprs) ->
    let argvars = List.map (fun _ -> Id.new_tmpvar ()) argexprs in
    (List.flatten (List.map2 (fun argvar argexpr -> convert_expr argvar argexpr) argvars argexprs))
    @ [FunCallStmt(name, fname, argvars)]
  | Typing.IntAddExpr(e1, e2) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1) @ (convert_expr x2 e2) @ [IntAddStmt(name, x1, x2)]
  | Typing.PtrAddExpr(e1, e2) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1) @ (convert_expr x2 e2) @ [PtrAddStmt(name, x1, x2)]
  | Typing.IntSubExpr(e1, e2) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1) @ (convert_expr x2 e2) @ [IntSubStmt(name, x1, x2)]
  | Typing.PtrSubExpr(e1, e2) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1) @ (convert_expr x2 e2) @ [PtrSubStmt(name, x1, x2)]
  | Typing.IntMulExpr(e1, e2) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1) @ (convert_expr x2 e2) @ [IntMulStmt(name, x1, x2)]
  | Typing.IntEqExpr(e1, e2) -> 
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1) @ (convert_expr x2 e2) @ [IntEqStmt(name, x1, x2)]
  | Typing.PtrEqExpr(e1, e2) -> 
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1) @ (convert_expr x2 e2) @ [PtrEqStmt(name, x1, x2)]
  | Typing.IntNeqExpr(e1, e2) -> 
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1) @ (convert_expr x2 e2) @ [IntNeqStmt(name, x1, x2)]
  | Typing.PtrNeqExpr(e1, e2) -> 
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1) @ (convert_expr x2 e2) @ [PtrNeqStmt(name, x1, x2)]

let rec convert_stmt (stmt : Typing.stmt) : stmt list =
  match stmt with
    Typing.ExprStmt(e) -> convert_expr (Id.new_tmpvar ()) e
  | Typing.ReturnStmt(e) ->
    let x = Id.new_tmpvar () in
    (convert_expr x e) @ [ReturnStmt(x)]
  | Typing.IfStmt(Typing.IntEqExpr(e1, e2), tcls, fcls) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1)
    @ (convert_expr x2 e2)
    @ [IfIntEqStmt(x1, x2,
                   List.flatten (List.map convert_stmt tcls),
                   List.flatten (List.map convert_stmt fcls))]
  | Typing.IfStmt(Typing.IntNeqExpr(e1, e2), tcls, fcls) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1)
    @ (convert_expr x2 e2)
    @ [IfIntNeqStmt(x1, x2,
                    List.flatten (List.map convert_stmt tcls),
                    List.flatten (List.map convert_stmt fcls))]
  | Typing.IfStmt(Typing.PtrEqExpr(e1, e2), tcls, fcls) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1)
    @ (convert_expr x2 e2)
    @ [IfPtrEqStmt(x1, x2,
                   List.flatten (List.map convert_stmt tcls),
                   List.flatten (List.map convert_stmt fcls))]
  | Typing.IfStmt(Typing.PtrNeqExpr(e1, e2), tcls, fcls) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    (convert_expr x1 e1)
    @ (convert_expr x2 e2)
    @ [IfPtrNeqStmt(x1, x2,
                    List.flatten (List.map convert_stmt tcls),
                    List.flatten (List.map convert_stmt fcls))]
  | Typing.IfStmt(cond, tcls, fcls) -> failwith "if with general condition not supported"
  | Typing.WhileStmt(Typing.IntEqExpr(e1, e2), blk) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    [WhileIntEqStmt(x1, x2, (convert_expr x1 e1) @ (convert_expr x2 e2), List.flatten (List.map convert_stmt blk))]
  | Typing.WhileStmt(Typing.IntNeqExpr(e1, e2), blk) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    [WhileIntNeqStmt(x1, x2, (convert_expr x1 e1) @ (convert_expr x2 e2), List.flatten (List.map convert_stmt blk))]
  | Typing.WhileStmt(Typing.PtrEqExpr(e1, e2), blk) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    [WhilePtrEqStmt(x1, x2, (convert_expr x1 e1) @ (convert_expr x2 e2), List.flatten (List.map convert_stmt blk))]
  | Typing.WhileStmt(Typing.PtrNeqExpr(e1, e2), blk) ->
    let x1 = Id.new_tmpvar () and x2 = Id.new_tmpvar () in
    [WhilePtrNeqStmt(x1, x2, (convert_expr x1 e1) @ (convert_expr x2 e2), List.flatten (List.map convert_stmt blk))]
  | Typing.WhileStmt(cond, blk) -> failwith "while with general condition not supported"
  | Typing.AssignStmt(x, e) -> convert_expr x e

let convert_body ((env, stmts) : Typing.funbody) : funbody =
  env, List.fold_left (fun result s -> result @ convert_stmt s) [] stmts

let convert_fundecl ((name, args, body): Typing.fundecl) : fundecl =
  name, args, convert_body body

let convert ((env, fundecls) : Typing.prog) : prog =
  env, List.map convert_fundecl fundecls
