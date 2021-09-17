let rec print_string_length length =
  if length <> 0 then (
    print_string "*";
    print_string_length (length-1);
  )
  else print_endline "";;

let rec histogram nums =
  match nums with
    first_num::rest ->
      print_string_length first_num;
      histogram rest;
    | _ -> ();;

histogram [3;7;5;1];;