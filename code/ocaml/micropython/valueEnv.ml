(* variable environment *)

open Syntax

type t = (pyident, pyvalue) Hashtbl.t

let create () = Hashtbl.create 1024

let assign env ident v = Hashtbl.replace env ident v

let get env ident = Hashtbl.find env ident
