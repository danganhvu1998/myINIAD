let rec factorial n =
  if n <= 0 then 1
  else n * factorial (n-1);;

let factorialSpaceO1 n =
  let rec factorial_iter result n =
    if n <= 0 then result
    else 
      let newResult = n * result in
      factorial_iter newResult (n-1) 
  in factorial_iter 1 n;;

factorial 6;;
factorialSpaceO1 6;;
factorial 7;;
factorialSpaceO1 7;;