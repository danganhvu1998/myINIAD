#load "str.cma";;
#load "load.cmo";;
#load "syntax.cmo";;
#load "lexer.cmo";;
#load "parser.cmo";;
#load "valueEnv.cmo";;
#load "eval.cmo";;

open Syntax
open Parser

(* test lexer *)
let tokens =
  let lex =
    Load.load_file "sample.py"
    |> Load.convert_block
    |> Lexing.from_string
  in let rec iter result =
    let token = Lexer.token lex in
    if token = Parser.EOF then result else iter (token::result)
  in List.rev (iter [])

(* test lexer & parser *)
let syntaxtree =
  Load.load_file "sample.py"
  |> Load.convert_block
  |> Lexing.from_string
  |> Parser.prog Lexer.token
