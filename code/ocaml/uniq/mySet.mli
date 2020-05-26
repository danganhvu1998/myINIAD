(* interface definition for multiSet.ml *)

type 'a set (* abstract : implementation is hidden  *)

val empty : 'a set
val add : 'a set -> 'a -> 'a set
val member_count : 'a set -> 'a -> int
val to_list : 'a set -> ('a * int) list

