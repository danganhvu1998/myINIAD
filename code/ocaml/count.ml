let a = ref 0;;
let count ()= 
  a := (!a+1);
  !a;;

print_int (count ());;print_endline "";;
print_int (count ());;print_endline "";;
print_int (count ());;print_endline "";;
print_int (count ());;print_endline "";;
print_int (count ());;print_endline "";;
print_int (count ());;print_endline "";;