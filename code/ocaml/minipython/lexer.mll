{
 open Parser
}

let space = [' ' '\t' '\r']
let notnewline = [^ '\n']
let newline = ['\n']
let digit = ['0'-'9']
let lower = ['a'-'z']
let upper = ['A'-'Z']
let symbol = [' '-'!' '#'-'&' '('-'~']

rule token = parse
  | space+
    { token lexbuf }
  | "#" notnewline* newline
    { token lexbuf }
  | newline
    { NEWLINE }
  | '"' (symbol* as s) '"'
    { STRING(s) }
  | digit+ as i
    { INT(int_of_string i) }
  | "if"
    { IF }
  | "else"
    { ELSE }
  | "while"
    { WHILE }
  | "def"
    { DEF }
  | "return"
    { RETURN }
  | (lower|upper) (digit|lower|upper|'_')*
    { IDENT(Lexing.lexeme lexbuf) }
  | '('
    { LPAREN }
  | ')'
    { RPAREN }
  | '{' space* newline
    { INDENT }
  | '}' space* newline
    { DEDENT }
  | '+'
    { PLUS }
  | '-'
    { MINUS }
  | '='
    { ASSIGN }
  | ':'
    { COLON }
  | ','
    { COMMA }
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
