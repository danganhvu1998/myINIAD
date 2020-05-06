let digit num =
  let rec digitCount n res =
    if n<10 then n+res
    else let res1 = res+1 in
    let n1 = n/10 in
    digitCount n1 res1 in
    digitCount num 0;;

digit 123;;
digit 12345;;
digit 123678;;