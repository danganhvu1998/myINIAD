(* variable environment *)

(* type (pyident, pyvalue) t *)
type ('a, 'b) t

val create : unit -> ('a, 'b) t
val assign : ('a, 'b) t -> 'a -> 'b -> unit
val get : ('a, 'b) t -> 'a -> 'b

val extend : ('a, 'b) t -> ('a, 'b) t
