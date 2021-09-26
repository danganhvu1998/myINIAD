let checkab checkStr =
  let strLeng = String.length checkStr in
  if String.get checkStr 0 != 'a' then false
  else if String.get checkStr (strLeng-1) != 'b' then false
  else 
    let allA = ref true in
    for i = 1 to (strLeng-2) do
      if  String.get checkStr i !='a' then allA:=false
    done;
    !allA;;

checkab "aaaab";;
checkab "ab";;
checkab "b";;
