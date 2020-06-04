%{
open Syntax
%}

%token IF ELSE WHILE
%token DEF RETURN
%token <string> IDENT
%token <string> STRING
%token <int> INT
%token LPAREN RPAREN
%token ASSIGN COLON
%token COMMA
%token PLUS MINUS EQUAL NOTEQUAL
%token NEWLINE INDENT DEDENT
%token EOF

%nonassoc EQUAL NOTEQUAL
%left PLUS MINUS

%start prog
%type  <Syntax.pyprog> prog

%%

prog: stmt_list EOF { $1 }

stmt_list:
      NEWLINE stmt_list { $2 }
    | stmt stmt_list    { $1::$2 }
    |                   { [] }

stmt: IDENT ASSIGN expr newline { AssignStmt($1, $3) }
    | IF expr COLON NEWLINE INDENT stmt_list DEDENT loption(else_term)
        { IfStmt($2, $6, $8) }
    | WHILE expr COLON NEWLINE INDENT stmt_list DEDENT
        { WhileStmt($2, $6) }
    | DEF IDENT LPAREN separated_list(COMMA, IDENT) RPAREN COLON NEWLINE INDENT stmt_list DEDENT
        { DefStmt($2, $4, $9) }
    | RETURN expr newline
        { ReturnStmt($2) }
    | expr newline
        { ExprStmt($1) }

else_term: ELSE COLON NEWLINE INDENT list(stmt) DEDENT { $5 }

expr: expr PLUS expr
        { BinopExpr(AddOp, $1, $3) }
    | expr MINUS expr
        { BinopExpr(SubOp, $1, $3) }
    | expr EQUAL expr
        { BinopExpr(EqOp, $1, $3) }
    | expr NOTEQUAL expr
        { BinopExpr(NeqOp, $1, $3) }
    | LPAREN expr RPAREN
        { $2 }
    | IDENT LPAREN separated_list(COMMA, expr) RPAREN
        { FunctionCallExpr($1, $3) }
    | IDENT
        { IdentExpr($1) }
    | INT
        { ConstExpr(IntValue($1)) }
    | STRING
        { ConstExpr(StrValue($1)) }

newline: NEWLINE | EOF {}
