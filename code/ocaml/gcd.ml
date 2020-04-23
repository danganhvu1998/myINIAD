let rec gcd num1 num2 =
  if min num1 num2 = 0 then max num1 num2
  else if num1<>num2 then gcd (min num1 num2) ((max num1 num2) mod (min num1 num2))
  else num1 ;;
gcd 15 20;;
gcd 20 30;;
