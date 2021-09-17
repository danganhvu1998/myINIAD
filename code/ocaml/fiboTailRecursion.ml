let rec fib1 n =
  match n with
    1|2 -> 1
    | x -> (fib1 (x-1))+(fib1 (x-2));;

fib1 10;;
fib1 2;;
fib1 3;;
fib1 4;;
fib1 5;;
fib1 40;;

let fib2 n = 
  match n with
    1|2 -> 1
    | x -> 
      let rec fib fibXminus1 fibX currX neededX =
        if currX = neededX then fibX
        else let nextFibVal = fibXminus1+fibX in
        fib fibX nextFibVal (currX+1) neededX in
      fib 1 1 2 x;;

fib2 10;;
fib2 2;;
fib2 3;;
fib2 4;;
fib2 5;;
fib2 40;;
      
