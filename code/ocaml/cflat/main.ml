(* main *)

let main argc argv =
  let ch =
    match argc with
      1 -> stdin
    | 2 -> open_in argv.(1)
    | _ -> failwith "Usage: cflatc [foo.c]"
  in let lexbuf = Lexing.from_channel ch in
  try
    Parser.prog Lexer.token lexbuf
    |> Typing.convert
    |> Knormal.convert
    |> Ssa.convert
    |> Regalloc.convert
    |> Asm.emit stdout;
    0
  with
    Parser.Error ->
    let p = Lexing.lexeme_start_p lexbuf in
    failwith (Printf.sprintf "Syntax error at around line %d, pos %d"
                p.Lexing.pos_lnum (p.Lexing.pos_cnum - p.Lexing.pos_bol))

let _ =
  let retval = main (Array.length Sys.argv) Sys.argv
  in exit retval

