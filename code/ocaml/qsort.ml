let rec filter func arr =
  match arr with
    [] -> []
    | hd::tl when (func hd)=true -> [hd] @ (filter func tl )
    | hd::tl -> filter func tl;;

let length aList = List.fold_left (fun result x -> result+1) 0 aList;;

let rec qsort arr =
  match arr with
    [] -> []
    | hd::tl ->
      let leftArr = filter (fun x -> x<hd) tl in
      let rightArr = filter (fun x -> x>hd) tl in
      (qsort leftArr) @ [hd] @ (qsort rightArr);;

qsort [1;5;3;4;6;2;10;9;8;7];;