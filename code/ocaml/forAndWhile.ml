let sum n = 
  let total = ref 0 in
  for i = 1 to n do
    total := !total+i
  done;
  !total
;;

print_int (sum 10);; print_endline "";;
print_int (sum 20);; print_endline "";;
print_int (sum 1000);; print_endline "";;

let sumW n = 
  let total = ref 0 in
  let i = ref 1 in
  while !i <= n do
    total := !total + !i;
    i := !i+1;
  done;
  !total
;;

print_int (sumW 10);; print_endline "";;
print_int (sumW 20);; print_endline "";;
print_int (sumW 1000);; print_endline "";;
