type expr = 
    Add of expr * expr  (* addition *)
  | Mul of expr * expr  (* multiplication *)
  | Val of float        (* constant *)
  | Var of string       (* variable *)

let rec fold_const expr = 
  match expr with 
    Val(one) -> Val(one)
    | Var(one) -> Var(one)
    | Add(one, two) -> (
        let folded_one = fold_const one in
        let folded_two = fold_const two in
        match folded_one, folded_two with
            Val(valFoledOne), Val(varFoldedTwo) -> Val(valFoledOne +. varFoldedTwo);
            | Var(varFoledOne), Var(varFoldedTwo) -> Var(varFoledOne ^ varFoldedTwo);
            | _ -> Add(folded_one, folded_two)
      )
    | Mul(one, two) -> (
        let folded_one = fold_const one in
        let folded_two = fold_const two in
        match folded_one, folded_two with
            Val(valFoledOne), Val(varFoldedTwo) -> Val(valFoledOne *. varFoldedTwo);
            | _ -> Mul(folded_one, folded_two)
      );;

fold_const (Add(Val(3.), Val(4.)));;
fold_const (Mul(Val(2.), Add(Val(3.), Val(4.))));;
fold_const (Add(Mul(Var("x"), Val(1.)), Mul(Val(2.), Add(Val(3.), Val(4.)))));;