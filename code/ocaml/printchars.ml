let printchars str =
  let strLeng = String.length str in
  for i = 0 to (strLeng-1) do
    print_endline( String.sub str i 1 );
  done;;

printchars "aaaab";;
printchars "ab";;
printchars "b";;
