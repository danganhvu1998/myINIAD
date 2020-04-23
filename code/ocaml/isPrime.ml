let isprime num =
  let rec tryDivide a = 
    if a*a > num then true
    else if num mod a = 0 then false
    else tryDivide (a+1) in
    tryDivide(2);;
isprime 3;;
isprime 4;;
isprime 5;;
isprime 1000000007;;
