let rec filter func arr =
  match arr with
    [] -> []
    | hd::tl when (func hd)=true -> [hd] @ (filter func tl )
    | hd::tl -> filter func tl;;

filter (fun x->x mod 2 = 0) [1;2;3;4;5;6;7;8];;
filter (fun x->x mod 3 = 0) [1;2;3;4;5;6;7;8];;
filter (fun x->x mod 2 = 1) [1;2;3;4;5;6;7;8];;

let filfunc arr = 
  let rec fiFun arr1 last = 
    match arr1 with
      hd::tl when last>=hd -> false
      | hd::tl -> fiFun tl hd
      | [] -> true
  in fiFun arr (-100);;

filfunc [];;
filfunc [1;2;3;4;5];;
filfunc [1;2;10;4;5];;
filfunc [1;2;3;9;100];;