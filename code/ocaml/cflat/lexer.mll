{
 open Parser
 let tokenize_keyword s =
   try
     List.assoc s
       [ "int", INT;
         "char", CHAR;
         "extern", EXTERN;
         "if", IF;
         "else", ELSE;
         "while", WHILE;
         "return", RETURN;
       ]
   with Not_found -> IDENT(s)
 let unescape = Scanf.unescaped
}

let space = [' ' '\t' '\r']
let newline = ['\n']
let digit = ['0'-'9']
let lower = ['a'-'z']
let upper = ['A'-'Z']
let symbol = [' '-'!' '#'-'&' '('-'~']

rule comment = parse
  | "*/"
    { token lexbuf }
  | newline
    { Lexing.new_line lexbuf; comment lexbuf }
  | eof
    { failwith "unterminated comment" }
  | _
    { comment lexbuf }

and token = parse
  | space+
    { token lexbuf }
  | newline
    { Lexing.new_line lexbuf; token lexbuf }
  | "/*"
    { comment lexbuf }
  | '"' ([^ '"']* as s) '"'
    { STRVAL(unescape s) }
  | digit+ as i
    { INTVAL(Int32.of_string i) }
  | (lower|upper) (digit|lower|upper|'_')*
    { tokenize_keyword (Lexing.lexeme lexbuf) }
  | '('
    { LPAREN }
  | ')'
    { RPAREN }
  | '{'
    { LCBRAC }
  | '}'
    { RCBRAC }
  | '+'
    { PLUS }
  | '-'
    { MINUS }
  | '='
    { ASSIGN }
  | '*'
    { ASTERISK }
  | ','
    { COMMA }
  | ';'
    { SEMICOLON }
  | "=="
    { EQUAL }
  | "!="
    { NOTEQUAL }
  | eof
    { EOF }
  | _
    { failwith ("unknown token: " ^ Lexing.lexeme lexbuf) }

{
}
