type comparison = Less | Equal | Greater

(* Create Module Signature *)
module type ORDERED_TYPE = 
  sig
    val cmp : 'a -> 'a -> comparison
  end;;

(* Create Module *)
module AscendingInt : ORDERED_TYPE =
  struct
    let cmp x y = 
      if x = y then Equal
      else if x < y then Less
      else Greater 
  end;;

module DescendingInt : ORDERED_TYPE =
  struct
    let cmp x y = 
      if x = y then Equal
      else if x > y then Less
      else Greater 
  end;;

(* Create New Module Extent Of OrderedString *)
module type ORDERED_TYPE_EXTENTED = 
  functor (Elt: ORDERED_TYPE) ->
  sig
    val compare: 'a -> 'a -> comparison
  end

module OrderedIntExtented : ORDERED_TYPE_EXTENTED =
  functor (Elt: ORDERED_TYPE) ->
  struct
    let compare fst snd = Elt.cmp fst snd;;
  end

module Ascending = OrderedIntExtented(AscendingInt);;
module Descending = OrderedIntExtented(DescendingInt);;
Ascending.compare 1 3;; (* - : comparison = Less *)
Descending.compare 1 3;; (*- : comparison = Greater*)

(* #use "testFunctor.ml";; *)