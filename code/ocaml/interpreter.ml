type operator =
  Char of char
  | Cond of bool;;

type expression =
  Binop of operator * expression * expression
  | Number of int;;

let aExpression = Binop(Cond(1>2), Number(1), Binop(Char('*'), Number(2), Number(3)));;

let rec eval expression =
  match expression with
    Number(num) -> num
    | Binop(exp1, exp2, exp3) ->
      match exp1 with
        Char(operator) ->
          if(operator='+') then (eval exp2)+(eval exp3)
          else if(operator='-') then (eval exp2)-(eval exp3)
          else if(operator='*') then (eval exp2)*(eval exp3)
          else if(operator='/') then (eval exp2)/(eval exp3)
          else 0
        | Cond(operator) ->
          if(operator=true) then (eval exp2)
          else (eval exp3);;

eval aExpression;;

(* type instruction = 
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
compile aExpression;; *)


(* #use "interpreter.ml";; *)