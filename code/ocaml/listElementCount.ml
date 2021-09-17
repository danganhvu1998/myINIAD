(* let length aList = 
  let rec len curr arr =
    match arr with 
      firstElement::theRestOfArr -> len (curr+1) theRestOfArr
      | [] -> curr 
  in len 0 aList;; *)
  
let length aList = List.fold_left (fun result x -> result+1) 0 aList;;
length [1;2;3;4;5;6;7;8;9;10];;
length [1;2;3;4;5;6;7;8];;
length [1;2;3;4;5;6;7;8;9];;