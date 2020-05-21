type comparison = Less | Equal | Greater

(* ORDERED_TYPE : signature for the types with
                   equality and comparability *)

module type ORDERED_TYPE = 
  sig
    type t
    val cmp : t -> t -> comparison
  end

(* MultiSet: functor from any structure of ORDERED_TYPE
              to the definition of multiple set of that type *)

module type MULTISET =
    functor (Elt: ORDERED_TYPE) ->
  sig
    type elem = Elt.t (* not abstract *)
    type t            (* abstract *)
    val empty : t
    val add : t -> elem -> t
    val remove : t -> elem -> t
    val member : t -> elem -> bool
    exception Not_Found
  end

module MultiSet : MULTISET =
  functor (Elt: ORDERED_TYPE) ->
  struct
    exception Not_Found

    type elem = Elt.t
    type t = Leaf | Node of elem * t * t

    let empty = Leaf

    let rec add set elt =
      match set with
	Leaf -> Node(elt, Leaf, Leaf)
      | Node(e, left, right) ->
	  match Elt.cmp e elt with
	    Less -> Node(e, left, add right elt)
	  | _ -> Node(e, add left elt, right)
	      
    let rec remove_max = function
	Leaf -> failwith "remove_max"
      |	Node(v, left, Leaf) -> (v, left)
      |	Node(v, left, right) -> 
	  let (m, t) = remove_max right in
	  (m, Node(v, left, t))

    let remove_top = function
	Leaf -> failwith "remove_top"
      |	Node(_, left, Leaf) -> left
      |	Node(_, Leaf, right) -> right
      |	Node(_, left, right) ->
	  let (t, newl) = remove_max left in
	  Node(t, newl, right)

    let rec remove set elt = match set with
      Leaf -> raise Not_Found
    | Node(top, left, right) as whole ->
	match Elt.cmp elt top with
	  Equal -> remove_top whole
	| Less -> Node(top, remove left elt, right)
	| Greater -> Node(top, left, remove right elt)

    let rec member set elt = match set with
      Leaf -> false
    | Node(top, left, right) ->
	match Elt.cmp elt top with
	  Equal -> true
	| Less -> member left elt
	| Greater -> member right elt
  end

(* OrderedString : string with normal ordering *)

module OrderedString =
  struct
    type t = string
    let cmp x y = 
      if x = y then Equal
      else if x < y then Less
      else Greater
  end

(* StringSet: multiple set for string *)

module StringSet = MultiSet(OrderedString)

(* NCString: case-insensitive string *)

module NCString =
  struct
    open String
    type t = string
    let cmp x y = 
      let (x', y') = (lowercase_ascii x, lowercase_ascii y) in
      if x' = y' then Equal
      else if x' < y' then Less
      else Greater
  end

module NCStringSet = MultiSet(NCString)