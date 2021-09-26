(* type checking *)

type ident = string (* = Id.t *)

type expr =
    IntImmExpr of int32                (* 12 *)
  | StrImmExpr of string               (* "string" *)
  | IntVarExpr of ident                (* x *)
  | PtrVarExpr of ident                (* name *)
  | FunCallExpr of ident * expr list   (* foo(1+2, a*b) *)
  | IntAddExpr of expr * expr          (* int + int *)
  | PtrAddExpr of expr * expr          (* ptr + int *)
  | IntSubExpr of expr * expr          (* int - int *)
  | PtrSubExpr of expr * expr          (* ptr + int *)
  | IntMulExpr of expr * expr          (* int * int *)
  | IntEqExpr of expr * expr           (* int == int *)
  | PtrEqExpr of expr * expr           (* ptr == ptr *)
  | IntNeqExpr of expr * expr          (* int != int *)
  | PtrNeqExpr of expr * expr          (* ptr != ptr *)

type typ =
    IntType
  | CharPtrType
  | FunType of typ * typ list

module Strmap = Map.Make(String)
type typenv = typ Strmap.t

type stmt =
    ExprStmt of expr                            (* 1 + 2; *)
  | ReturnStmt of expr                          (* return i + 1; *)
  | IfStmt of expr * stmt list * stmt list      (* if (...) { ... } else { ... } *)
  | WhileStmt of expr * stmt list               (* while (...) { ... } *)
  | AssignStmt of ident * expr                  (* a = 1 + 2 + 3; *)

type funbody = typenv * stmt list               (* i = 1; return i; *)
type fundecl = ident * ident list * funbody

type prog = typenv * fundecl list

(******)

let convert_typ (t : Syntax.typ) : typ =
  match t with
    Syntax.IntType -> IntType
  | Syntax.CharPtrType -> CharPtrType

let rec convert_expr (env : typenv) (expr : Syntax.expr) : expr * typ =
  match expr with
    Syntax.IntImmExpr(i) -> IntImmExpr(i), IntType
  | Syntax.StrImmExpr(s) -> StrImmExpr(s), CharPtrType
  | Syntax.VarExpr(x) ->
    begin
      let t = Strmap.find x env in
      match t with
        IntType -> IntVarExpr(x), t
      | CharPtrType -> PtrVarExpr(x), t
      | _ -> failwith "Type error: assignment of function to variable"
    end
  | Syntax.FunCallExpr(fname, argexprs) ->
    let ftype = Strmap.find fname env in
    begin
      match ftype with
        FunType(rettyp, argtyps) ->
        let exprs' = List.map2
            (fun expr typ ->
               let expr', typ' = convert_expr env expr in
               if typ = typ' then expr' else failwith "Type error: type mismatch in arguments")
            argexprs argtyps
        in FunCallExpr(fname, exprs'), rettyp
      | _ -> failwith "Type error: non function called"
    end
  | Syntax.AddExpr(e1, e2) ->
    let e1, t1 = convert_expr env e1 and e2, t2 = convert_expr env e2 in
    begin
      match t1, t2 with
        IntType, IntType -> IntAddExpr(e1, e2), IntType
      | CharPtrType, IntType -> PtrAddExpr(e1, e2), CharPtrType
      | _ -> failwith "Type error: +"
    end
  | Syntax.SubExpr(e1, e2) ->
    let e1, t1 = convert_expr env e1 and e2, t2 = convert_expr env e2 in
    begin
      match t1, t2 with
        IntType, IntType -> IntSubExpr(e1, e2), IntType
      | CharPtrType, IntType -> PtrSubExpr(e1, e2), CharPtrType
      | _ -> failwith "Type error: -"
    end
  | Syntax.MulExpr(e1, e2) ->
    let e1, t1 = convert_expr env e1 and e2, t2 = convert_expr env e2 in
    begin
      match t1, t2 with
        IntType, IntType -> IntMulExpr(e1, e2), IntType
      | _ -> failwith "Type error: *"
    end
  | Syntax.EqExpr(e1, e2) ->
    let e1, t1 = convert_expr env e1 and e2, t2 = convert_expr env e2 in
    begin
      match t1, t2 with
        IntType, IntType -> IntEqExpr(e1, e2), IntType
      | CharPtrType, CharPtrType -> PtrEqExpr(e1, e2), IntType
      | _ -> failwith "Type error: =="
    end
  | Syntax.NeqExpr(e1, e2) ->
    let e1, t1 = convert_expr env e1 and e2, t2 = convert_expr env e2 in
    begin
      match t1, t2 with
        IntType, IntType -> IntNeqExpr(e1, e2), IntType
      | CharPtrType, CharPtrType -> PtrNeqExpr(e1, e2), IntType
      | _ -> failwith "Type error: =="
    end

let rec convert_stmt (env : typenv) (rettyp : typ) (stmt : Syntax.stmt) : stmt =
  match stmt with
    Syntax.ExprStmt(e) ->
    let e, t = convert_expr env e in ExprStmt(e)
  | Syntax.ReturnStmt(e) ->
    let e, t = convert_expr env e in
    if t = rettyp && t = IntType then ReturnStmt(e)
    else failwith "Type error: return"
  | Syntax.IfStmt(cond, tcls, fcls) ->
    let cond, t = convert_expr env cond in
    if t = IntType then
      IfStmt(cond, List.map (convert_stmt env rettyp) tcls, List.map (convert_stmt env rettyp) fcls)
    else failwith "Type error: if"
  | Syntax.WhileStmt(cond, blk) ->
    let cond, t = convert_expr env cond in
    if t = IntType then
      WhileStmt(cond, List.map (convert_stmt env rettyp) blk)
    else failwith "Type error: while"
  | Syntax.AssignStmt(x, e) ->
    let e, t = convert_expr env e in
    let t' = Strmap.find x env in
    if t = t' then AssignStmt(x, e)
    else failwith "Type error: assign"

let convert_decl (env : typenv) (d: Syntax.decl) : typenv * fundecl option =
  match d with
    Syntax.FunDecl(typ, name, args, (vardecls, stmts)) ->
    let rettyp = convert_typ typ in
    let t = FunType(rettyp, List.map (fun (typ, ident) -> convert_typ typ) args) in
    let env' = Strmap.add name t env in
    let funenv = List.fold_left (fun e (typ, ident) -> Strmap.add ident (convert_typ typ) e) env' args in
    let funenv' = List.fold_left (fun e (typ, ident) -> Strmap.add ident (convert_typ typ) e) funenv vardecls in
    env', Some(name, List.map snd args, (funenv', List.map (convert_stmt funenv' rettyp) stmts))
  | Syntax.ExternDecl(typ, ident, argtyps) ->
    let t = FunType(convert_typ typ, List.map convert_typ argtyps) in
    let env' = Strmap.add ident t env in
    env', None

let convert (p : Syntax.prog) : prog =
  let env = Strmap.empty in
  List.fold_left
    (fun (env, decls) d ->
       let env', fdopt = convert_decl env d in
       match fdopt with
         Some(fd) -> env', decls @ [fd]
       | None -> env', decls)
    (env, []) p
