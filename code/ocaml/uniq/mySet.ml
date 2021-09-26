(* Implementation for multiset *)

exception Empty_Set
exception Not_Found
    
type 'a set = Leaf | Node of 'a * int * 'a set * 'a set
    
let empty = Leaf
 
let rec add set elt =
  match set with
    Leaf -> Node(elt, 1, Leaf, Leaf)
  |	Node(e, cnt, left, right) ->
      if e = elt then Node(e, cnt + 1, left, right)
      else if e < elt then Node(e, cnt, left, add right elt)
      else Node(e, cnt, add left elt, right)
	  
let rec member_count set elt = match set with
  Leaf -> 0
| Node(top, cnt, left, right) ->
    if top = elt then cnt
    else if (elt < top) then member_count left elt
    else member_count right elt
	
let rec remove_top = function
    Leaf -> raise Empty_Set
  | Node(_, _, left, Leaf) -> left
  | Node(_, _, Leaf, right) -> right
  | Node(_, _, (Node(ltop, lcnt, _, _) as left),
	 (Node(rtop, rcnt, _, _) as right)) ->
	   if (ltop < rtop)
	   then Node(ltop, lcnt, remove_top left, right)
	   else Node(rtop, rcnt, left, remove_top right)

let rec remove set elt = match set with
  Leaf -> raise Not_Found
| Node(top, cnt, left, right) as whole ->
    if top = elt then begin
      if cnt > 1 then
	Node(top, cnt - 1, left, right)
      else
	remove_top whole
    end
    else if (elt < top) then Node(top, cnt, remove left elt, right)
    else Node(top, cnt, left, remove right elt)
	
let rec to_list l = function
    Leaf -> l
  | Node(top, cnt, left, right) -> to_list ((top,cnt)::(to_list l right)) left

let to_list set = to_list [] set

