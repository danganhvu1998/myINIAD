let rec fib n =
  match n with
    0 | 1 -> 1 (*0 or 1 then 1*)
    | x -> fib(x-1) + fib(x-2);;(*else ...*)
fib 6;;

let rand n =
  match n with
    (x, y, 0) -> 1
    | (x, 0, z) -> x*z
    | (0, y, z) -> y-z
    | (x, y, z) -> x+y+z;;
rand (10, 15, 0);;
rand (10, 0, 50);;
rand (0, 15, 50);;
rand (10, 15, 50);;


let randList n =
  match n with
    [x; y; 0] -> 1
    | [x; 0; z] -> x*z
    | [x; y; z] -> x+y+z
    | [x; y; z; t] -> (x+y+z)*t
    | _ -> 0;;
randList [1;2;3];;
randList [0;2;3];;
randList [1;0;3];;
randList [1;2;0];;
randList [1;2;0;100];;