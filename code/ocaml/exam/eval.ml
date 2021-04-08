type value =
  Float of float      (* float value *)
| Int of int          (* integer value *)

type expr = 
  Add of expr * expr  (* a + b *)
| Mul of expr * expr  (* a * b *)
| Const of value      (* constant value *)

let rec value_to_float value =
  match value with
  Float(f_val) -> f_val *. 1.0
  | Int(i_val) -> Int.to_float i_val;;

let rec eval_expr expr x_value=
  match expr with
    Add(left, right) -> (eval_expr left x_value) + (eval_expr right x_value)
    | Mul(left, right) -> (eval_expr left x_value) * (eval_expr right x_value)
    | Const(val) -> value_to_float val;;

eval (Add(Const(Int(1)), Const(Int(2))));;
eval (Mul(Const(Float(2.5)), Const(Int(3))));;