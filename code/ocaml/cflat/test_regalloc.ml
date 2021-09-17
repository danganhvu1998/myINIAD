#load "id.cmo";;
#load "syntax.cmo";;
#load "lexer.cmo";;
#load "parser.cmo";;
#load "parser.cmo";;
#load "typing.cmo";;
#load "knormal.cmo";;
#load "ssa.cmo";;
#load "machine.cmo";;
#load "regalloc.cmo";;

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

let typing =
  Typing.convert syntaxtree

let knorm =
  Knormal.convert typing

let ssa =
  Ssa.convert knorm

let regalloc =
  Regalloc.convert ssa

(*
let regalloc1 =
  Regalloc.convert_fundecl ("test", ["a"; "b"], (Typing.Strmap.empty,
                                                 [Ssa.IntAddStmt("c", "a", "b");
                                                  Ssa.IntSubStmt("d", "a", "b");
                                                  Ssa.FunCallStmt("e", "foo", ["a"; "c"]);
                                                  Ssa.ReturnStmt("d")]))

let regalloc2 =
  Regalloc.convert_fundecl ("test", ["a"; "b"], (Typing.Strmap.empty,
                                                 [Ssa.IntAddStmt("c", "a", "b");
                                                  Ssa.IntSubStmt("d", "a", "c");
                                                  Ssa.FunCallStmt("e", "foo", ["a"; "c"]);
                                                  Ssa.ReturnStmt("d")]))
*)

