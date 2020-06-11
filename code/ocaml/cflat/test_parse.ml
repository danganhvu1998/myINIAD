#load "id.cmo";;
#load "syntax.cmo";;
#load "lexer.cmo";;
#load "parser.cmo";;

open Syntax

(* test lexer & parser *)
let syntaxtree =
  let lexbuf =
    open_in "sample.c"
    |> Lexing.from_channel
  in try
    Parser.prog Lexer.token lexbuf
  with
    Parser.Error ->
    let p = Lexing.lexeme_start_p lexbuf in
    failwith (Printf.sprintf "Syntax error at around line %d, pos %d"
                p.Lexing.pos_lnum (p.Lexing.pos_cnum - p.Lexing.pos_bol))
