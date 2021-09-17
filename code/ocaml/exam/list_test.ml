let rec flatten1 xs =
  match xs with
    hd::tl -> hd @ (flatten tl)
  | [] -> [];;

(* let length aList = List.fold_left (fun result x -> result+1) 0 aList;; *)

let flatten xs = List.fold_left (fun result x -> result @ x) [] xs;;

flatten1 [[1;2;3;4;5];[1;2;3;4;5]];;
flatten [[1;2;3;4;5];[1;2;3;4;5]];;