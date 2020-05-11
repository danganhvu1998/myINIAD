let mymap f mylist =
  List.fold_left (fun result x->
    (f x) :: result
   ) []  (List.rev mylist);;

let add x = x+1;;

let rec mymap2 f mylist =
  match mylist with
    [] -> []
    | hd::tl -> [ (f hd) ]  @ (mymap2 f tl);;
mymap (add) [1;2;3;4;5;6];;
mymap2 (add) [1;2;3;4;5;6];;