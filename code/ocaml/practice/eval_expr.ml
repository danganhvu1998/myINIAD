type expr =
  Add of expr * expr
| Mul of expr * expr
| Val of int
| X    

let rec eval_expr expr x_value=
  match expr with
    Add(left, right) -> (eval_expr left x_value) + (eval_expr right x_value)
    | Mul(left, right) -> (eval_expr left x_value) * (eval_expr right x_value)
    | Val(value) -> value
    | X(_) -> x_value;;

eval_expr (Add(Val(2), Mul(Val(3), X))) 4;; 