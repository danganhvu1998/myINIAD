(* Digital Money *)

(* whole bank information *)
(* type t = (string, int) Hashtbl.t *)

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

(* test to see if it works *)
let inipay = create ();;
deposit inipay "alice" 10000;
deposit inipay "bob" 5000;
withdraw inipay "alice" 300;
transfer inipay "alice" "bob" 100;
Printf.printf "Finally, alice has %d and bob has %d yen\n"
  (amount inipay "alice") (amount inipay "bob")