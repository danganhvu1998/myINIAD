type expression =
  Binop of char * expression * expression
  | Number of int;;

let aExpression = Binop('+', Number(1), Binop('*', Number(2), Number(3)));;

let rec eval expression =
  match expression with
    Binop(exp1, exp2, exp3) ->
      if(exp1='+') then (eval exp2)+(eval exp3)
      else if(exp1='-') then (eval exp2)-(eval exp3)
      else if(exp1='*') then (eval exp2)*(eval exp3)
      else if(exp1='/') then (eval exp2)/(eval exp3)
      else 0
    | Number(num) -> num;;

eval aExpression;;

type instruction = 
  Add | Sub | Mul | Div
  | Push of int;;

let rec compile expression =
  match expression with
    Binop(exp1, exp2, exp3) ->
      if(exp1='+') then (compile exp2)@(compile exp3)@[Add]
      else if(exp1='-') then (compile exp2)@(compile exp3)@[Sub]
      else if(exp1='*') then (compile exp2)@(compile exp3)@[Mul]
      else if(exp1='/') then (compile exp2)@(compile exp3)@[Add]
      else []
    | Number(num) -> [Push(num)];;
compile aExpression;;


(* #use "interpreter.ml";; *)