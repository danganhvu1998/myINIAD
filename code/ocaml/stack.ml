exception EmptyStack;;

type 'a stack = { mutable s : 'a list } ;;

let new_stack () = { s = [] };;

let s = new_stack ();;

let pop aStack = 
  match aStack.s with
    | firstNum::restNum -> 
      aStack.s <- restNum;
      firstNum
    | _ -> raise EmptyStack

let push aStack aNum = aStack.s <- ([aNum]@aStack.s);;

push s 1;;
push s 2;;
push s 3;;
pop s;;
pop s;;
pop s;;
pop s;;

(* #use "stack.ml";;  *)