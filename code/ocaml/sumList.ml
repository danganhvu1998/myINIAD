let rec sum nums =
  match nums with
    num::theRest -> num + (sum theRest)
    | [] -> 0;;

sum [1;2;3;4;5;6;7;8;9;10];;