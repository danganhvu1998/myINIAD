(* C-flat abstract syntax *)

type ident = string (* = Id.t *)

type expr =
    IntImmExpr of int32                (* 12 *)
  | StrImmExpr of string               (* "string" *)
  | VarExpr of ident                   (* x, name *)
  | FunCallExpr of ident * expr list   (* foo(1+2, a*b) *)
  | AddExpr of expr * expr             (* a + b *)
  | SubExpr of expr * expr             (* a - b *)
  | MulExpr of expr * expr             (* a * b *)
  | EqExpr of expr * expr              (* a == b *)
  | NeqExpr of expr * expr             (* a != b *)

type typ =
    IntType
  | CharPtrType

type stmt =
    ExprStmt of expr                            (* 1 + 2; *)
  | ReturnStmt of expr                          (* return i + 1; *)
  | IfStmt of expr * stmt list * stmt list      (* if (...) { ... } else { ... } *)
  | WhileStmt of expr * stmt list               (* while (...) { ... } *)
  | AssignStmt of ident * expr                  (* a = 1 + 2 + 3; *)

type funbody = (typ * ident) list * stmt list   (* int i; char* p; / i = 1; return i; *)

type decl =
    FunDecl of typ * ident * (typ * ident) list * funbody   (* int foo(...) { ... } *)
  | ExternDecl of typ * ident * typ list                    (* extern int foo(...); *)

type prog = decl list
