exception EmptyStack;;

type 'a t = { mutable s : 'a list } ;;

let create () = { s = [] };;

let pop aStack = 
  match aStack.s with
    | firstNum::restNum -> 
      aStack.s <- restNum;
      firstNum
    | _ -> raise EmptyStack
    
let push aNum aStack = aStack.s <- ([aNum]@aStack.s);;