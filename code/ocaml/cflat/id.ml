(* Identifier *)

type t = string

let create prefix =
  let cnt = ref 0 in
  fun () -> cnt := !cnt + 1; prefix ^ (string_of_int !cnt)

let new_var = create "x."
let new_tmpvar = create "__t"
let new_label = create ".L"
