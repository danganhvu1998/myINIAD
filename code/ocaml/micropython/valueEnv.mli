(* variable environment *)

type t

val create : unit -> t
val assign : t -> Syntax.pyident -> Syntax.pyvalue -> unit
val get : t -> Syntax.pyident -> Syntax.pyvalue
