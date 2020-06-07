(* microPython syntax *)

type pyident = string

type pyvalue =
    BoolValue of bool
  | IntValue of int
  | StrValue of string
  | FunctionValue of pyident list * pystmt list * (pyident, pyvalue) ValueEnv.t
  | BuiltinFunValue of (pyvalue list -> pyvalue)
  | NoneValue

and pybinop =
    AddOp
  | SubOp
  | EqOp
  | NeqOp

and pyexpr =
    ConstExpr of pyvalue
  | IdentExpr of pyident
  | BinopExpr of pybinop * pyexpr * pyexpr
  | FunctionCallExpr of pyident * pyexpr list

and pystmt =
    AssignStmt of pyident * pyexpr
  | IfStmt of pyexpr * pystmt list * pystmt list
  | WhileStmt of pyexpr * pystmt list
  | ExprStmt of pyexpr
  | DefStmt of pyident * pyident list * pystmt list
  | ReturnStmt of pyexpr

type pyprog = pystmt list

exception PyReturn of pyvalue

(* utility functions *)
    
let bool_of_pyvalue v =
  match v with
    BoolValue(b) -> b
  | IntValue(i) -> i = 0
  | StrValue(s) -> (String.length s) = 0
  | FunctionValue(_, _, _) | BuiltinFunValue(_) -> true
  | NoneValue -> false

let string_of_pyvalue v =
  match v with
    BoolValue(b) -> string_of_bool b
  | IntValue(i) -> string_of_int i
  | StrValue(s) -> s
  | FunctionValue(_, _, _) | BuiltinFunValue(_) -> "<function>"
  | NoneValue -> "None"
