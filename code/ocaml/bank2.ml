(* Digital Money *)
module Bank :
  sig
    (* whole bank information *)
    type t

    (* bank operations *)
    val create : unit -> t
    val amount : t -> string -> int
    val deposit : t -> string -> int -> unit
    val withdraw : t -> string -> int -> unit
    val transfer : t -> string -> string -> int -> unit
  end =
  struct 
    (* whole bank information *)
    type t = (string, int) Hashtbl.t

    (* create new bank *)
    let create () =
      Hashtbl.create 100

    (* current amount *)
    let amount bank acct =
      try
        Hashtbl.find bank acct
      with
        Not_found -> 0

    (* deposit to account *)
    let deposit bank acct yen =
      let a = amount bank acct in
      Hashtbl.replace bank acct (a + yen)

    (* withdraw from account *)
    let withdraw bank acct yen =
      let a = amount bank acct in
      if a >= yen then Hashtbl.replace bank acct (a - yen)
      else failwith "You are not that rich"

    (* transfer money between accounts *)
    let transfer bank sender receiver yen =
      withdraw bank sender yen;
      deposit bank receiver yen
  end

(* test to see if it works *)
let inipay = Bank.create ();;
Bank.deposit inipay "alice" 10000;
Bank.deposit inipay "bob" 5000;
Bank.withdraw inipay "alice" 300;
Bank.transfer inipay "alice" "bob" 100;
Printf.printf "Finally, alice has %d and bob has %d yen\n"
  (Bank.amount inipay "alice") (Bank.amount inipay "bob")