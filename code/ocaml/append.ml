let combine arr num = arr@[num];;

let rec append list1 list2 =
  match list2 with
    [] -> list1
    | hd::tl -> 
      let list1 = (combine list1 hd) in
      append list1 tl;;

append [1;2;3] [4;5;6];;

let rec nth arr pos =
  match arr with
    hd::tl when pos = 0 -> hd
    | hd::tl -> (nth tl (pos-1));;
nth [0;1;2;3;4;5;6] 0;;
nth [0;1;2;3;4;5;6] 1;;
nth [0;1;2;3;4;5;6] 2;;
nth [0;1;2;3;4;5;6] 3;;
nth [0;1;2;3;4;5;6] 6;;