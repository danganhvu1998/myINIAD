%{
open Syntax       
%}

%token COMMA PLUS MINUS ASTERISK SEMICOLON EQUAL NOTEQUAL ASSIGN
%token LPAREN RPAREN LCBRAC RCBRAC
%token INT CHAR EXTERN IF ELSE WHILE RETURN
%token<string> IDENT
%token<int32> INTVAL
%token<string> STRVAL
%token EOF

%left EQUAL NOTEQUAL
%left PLUS MINUS
%left ASTERISK

%start prog
%type<Syntax.prog> prog

%%

prog: list(decl) EOF { $1 }

decl: typ IDENT LPAREN separated_list(COMMA, vardecl) RPAREN LCBRAC body RCBRAC
        { FunDecl($1, $2, $4, $7) }
    | EXTERN typ IDENT LPAREN separated_list(COMMA, typ) RPAREN SEMICOLON
        { ExternDecl($2, $3, $5) }
     
body: list(terminated(vardecl, SEMICOLON)) list(stmt)
        { ($1, $2) }

stmt: expr SEMICOLON
        { ExprStmt($1) }
    | RETURN expr SEMICOLON
        { ReturnStmt($2) }
    | IF LPAREN expr RPAREN block
        { IfStmt($3, $5, []) }
    | IF LPAREN expr RPAREN block ELSE block
        { IfStmt($3, $5, $7) }
    | WHILE LPAREN expr RPAREN block
        { WhileStmt($3, $5) }
    | IDENT ASSIGN expr SEMICOLON
        { AssignStmt($1, $3) }
        
block: stmt
         { [$1] }
     | LCBRAC list(stmt) RCBRAC
         { $2 }
         
vardecl: typ IDENT
           { ($1, $2) }
         
typ:  INT           { IntType }
    | CHAR ASTERISK { CharPtrType }

expr: expr PLUS expr
        { AddExpr($1, $3) }
    | expr MINUS expr
        { SubExpr($1, $3) }
    | expr ASTERISK expr
        { MulExpr($1, $3) }
    | expr EQUAL expr
        { EqExpr($1, $3) }
    | expr NOTEQUAL expr
        { NeqExpr($1, $3) }
    | LPAREN expr RPAREN
        { $2 }
    | IDENT LPAREN separated_list(COMMA, expr) RPAREN
        { FunCallExpr($1, $3) }
    | IDENT
        { VarExpr($1) }
    | INTVAL
        { IntImmExpr($1) }
    | STRVAL
        { StrImmExpr($1) }
