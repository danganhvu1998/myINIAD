(*Not Using List. Challenge - Brain goes brrr !!!!*)
let length aList = 
  let rec len curr arr =
    match arr with 
      firstElement::theRestOfArr -> len (curr+1) theRestOfArr
      | [] -> curr 
  in len 0 aList;;(*checked*)

let rec append list1 list2 =
  match list2 with
    [] -> list1
    | hd::tl -> 
      let list1 = (combine list1 hd) in
      append list1 tl;;
(* append [1;2;3] [4;5;6];; *)

let rec nth arr pos =
  match arr with
    hd::tl when pos = 0 -> hd
    | hd::tl -> (nth tl (pos-1));;
(* nth [0;1;2;3;4;5;6] 0;;
nth [0;1;2;3;4;5;6] 1;;
nth [0;1;2;3;4;5;6] 2;;
nth [0;1;2;3;4;5;6] 3;;
nth [0;1;2;3;4;5;6] 6;; *)

let lastEle list1 = nth list1 ((length list1)-1);;
(* lastEle [1;2;3;4;5];;
lastEle [1;2;3;4;10];;
lastEle [1;2;3];; *)

let combine arr num = arr@[num];;
(* combine [1;2;3] 4;;
combine [1;2;3;5;6] 4;; *)

let combineArrListWithNum arr num = 
  let rec comb currAns currArr n = 
    if (currAns=[] && currArr=[]) then [[n]]
    else match currArr with
      [] -> currAns
      | hd::tl -> 
        let currAns = (append currAns [(combine hd num)]) in
        comb currAns tl n
  in comb [] arr num;;

(* combineArrListWithNum [[1;2];[];[3;4;5]] 100;; *)

let rec arrRemoveOne arr pos =
  if arr = [] then []
  else match arr with
    hd::tl when pos = 0 -> tl
    | hd::tl -> [hd] @ (arrRemoveOne tl (pos-1));;
(* arrRemoveOne[1;2;3;4;5;6] 0;;
arrRemoveOne[1;2;3;4;5;6] 4;;
arrRemoveOne[1;2;3;4;5;6] 5;;
arrRemoveOne[1;2;3;4;5;6] 6;;
let a = [1;2;3;4;5;6];;
arrRemoveOne a 4;;
arrRemoveOne a 5;; *)

let combineArrListWithArrNum (arrList, arrNum) = (*ah crap me, my brain goes boom!!!*)
  let lengthArrNum = (length arrNum) in
  let rec combineTwoArr currAns currPosArrNum = 
    if currPosArrNum = lengthArrNum then currAns
    else 
      let first = (combineArrListWithNum arrList (nth arrNum currPosArrNum)) in
      let second = (arrRemoveOne arrNum currPosArrNum) in
      let newEle = ( first, second ) in 
      let currAns = (append currAns [newEle]) in
      combineTwoArr currAns (currPosArrNum+1)
  in combineTwoArr [] 0;;
(* combineArrListWithArrNum ([[1;2];[];[3;4;5]],[10;1;100]);;
combineArrListWithArrNum ([],[10;1;100]);;  *)
(*I cried after this*)

let permutation_ arr cnt =
  let lengthArr = (length arr) in
  let curAns = combineArrListWithArrNum ([], arr) in
  let rec letPuckingDoIt currAns lenArr needCnt = 
    match currAns with 
      hd::tl when (lengthArr - (length (snd hd))) = needCnt -> currAns
      | hd::tl -> 
        let currAns = (append tl (combineArrListWithArrNum hd)) in
        letPuckingDoIt currAns lenArr needCnt
  in letPuckingDoIt curAns lengthArr cnt;;

(* permutation_ [1;2;3;4] 4;;
permutation_ [1;2;3] 1;; *)
(*Here i realize that I has code permutation. T_T x 1000*)
(*Stop crying, I still need an S. Let fix it*)

let rec takeCFromP someCrazyList =  (*Should use tail whatever, but nah, sure I dont care about it. I have no feeling now, all because of this code*)
  match someCrazyList with 
    [] -> []
    | hd::tl -> 
      let treasure = fst hd in
      treasure@ (takeCFromP tl);;

let rec filter func arr = (*Copy code from myself*)
  match arr with
    [] -> []
    | hd::tl when (func hd)=true -> [hd] @ (filter func tl )
    | hd::tl -> filter func tl;;

let filfunc arr = 
  let rec fiFun arr1 lastNum = 
    match arr1 with
      hd::tl ->
        if (hd<lastNum) then false
        else (fiFun tl hd)
      | [] -> true
  in fiFun arr (-100);;

let permutation arr cnt = takeCFromP (permutation_ arr cnt);;

let combination arr cnt = 
  if( (cnt = 0) || (cnt > (length arr)) ) then [[]]
  else filter filfunc (permutation arr cnt);;

combination [1;2;3;4;5] 0;;
combination [1;2;3;4;5] 1;;
combination [1;2;3;4;5] 2;;
combination [1;2;3;4;5] 3;;
combination [1;2;3;4;5] 4;;
combination [1;2;3;4;5] 5;;
combination [1;2;3;4;5] 15;;

(* #use "combination.ml";; *)
(* This is long code fill with countless warning. But it runs. I am go to sleep. Thank you for reading all until here *)
