(* microPython syntax *)

type pyident = string

type pyvalue =
    BoolValue of bool
  | IntValue of int
  | StrValue of string

and pybinop =
    AddOp
  | SubOp
  | EqOp
  | NeqOp

and pyexpr =
    ConstExpr of pyvalue
  | IdentExpr of pyident
  | BinopExpr of pybinop * pyexpr * pyexpr

and pystmt =
    AssignStmt of pyident * pyexpr
  | IfStmt of pyexpr * pystmt list * pystmt list
  | WhileStmt of pyexpr * pystmt list
  | PrintStmt of pyexpr

type pyprog = pystmt list

(* utility functions *)
    
let bool_of_pyvalue v =
  match v with
    BoolValue(b) -> b
  | IntValue(i) -> i = 0
  | StrValue(s) -> (String.length s) = 0

let string_of_pyvalue v =
  match v with
    BoolValue(b) -> string_of_bool b
  | IntValue(i) -> string_of_int i
  | StrValue(s) -> s
