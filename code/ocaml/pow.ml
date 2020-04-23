let rec pow num1 num2 =
  if num2 = 0 then 1
  else if num2 mod 2 = 0 then pow (num1*num1) (num2/2)
  else num1 * (pow (num1*num1) (num2/2));;
pow 2 0;;
pow 2 10;;
pow 3 4;;

