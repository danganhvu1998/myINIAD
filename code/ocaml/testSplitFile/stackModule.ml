module MyStack :
  sig
    type 'a t
    val create: unit -> 'a t
    val push: 'a -> 'a t -> unit
    val pop: 'a t -> 'a
    exception EmptyStack;;
  end=
  struct
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
  end
let s = MyStack.create ();;
MyStack.push 1 s;;
MyStack.push 2 s;;
MyStack.push 3 s;;
print_int (MyStack.pop s);;
print_int (MyStack.pop s);;
print_int (MyStack.pop s);;
(* #use "stack.ml";;  *)