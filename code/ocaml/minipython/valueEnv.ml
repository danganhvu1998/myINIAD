(* variable environment *)

type ('a, 'b) t = ('a, 'b) Hashtbl.t list

let create () = [Hashtbl.create 256]

let assign env ident v =
  match env with
    top::_ -> Hashtbl.replace top ident v
  | [] -> failwith "empty environment"

let rec get env ident =
  match env with
    top::rest ->
    begin
      try Hashtbl.find top ident
      with Not_found -> get rest ident
    end
  | [] -> raise Not_found

let extend env =
  (Hashtbl.create 256)::env
