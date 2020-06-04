open Syntax

let rec eval_expr env expr =
  match expr with
    ConstExpr(v) -> v
  | IdentExpr(ident) -> ValueEnv.get env ident
  | BinopExpr(op, e1, e2) ->
    let v1 = eval_expr env e1 and v2 = eval_expr env e2 in
    begin
      match op with
        AddOp ->
        begin
          match v1, v2 with
          | IntValue(i1), IntValue(i2) -> IntValue(i1 + i2)
          | StrValue(s1), StrValue(s2) -> StrValue(s1 ^ s2)
          | _ -> failwith "type error"
        end
      | SubOp ->
        begin
          match v1, v2 with
          | IntValue(i1), IntValue(i2) -> IntValue(i1 - i2)
          | _ -> failwith "type error"
        end
      | EqOp -> BoolValue(v1 = v2)
      | NeqOp -> BoolValue(v1 <> v2)
    end
  | FunctionCallExpr(name, argexprs) ->
    let argvals = List.map (eval_expr env) argexprs in
    let funval = ValueEnv.get env name in
    match funval with
      FunctionValue(argnames, body) ->
      let extenv = ValueEnv.extend env in
      List.iter2 (ValueEnv.assign extenv) argnames argvals;
      begin
        try
          eval_stmt_list extenv body;
          NoneValue
        with
          PyReturn(retval) -> retval
      end
    | BuiltinFunValue(f) -> f argvals
    | _ -> failwith "not a function"

and eval_stmt env stmt =
  match stmt with
    AssignStmt(ident, expr) ->
    let v = eval_expr env expr in
    ValueEnv.assign env ident v
  | IfStmt(cond, tbody, fbody) ->
    if bool_of_pyvalue (eval_expr env cond)
    then eval_stmt_list env tbody
    else eval_stmt_list env fbody
  | WhileStmt(cond, body) ->
    while bool_of_pyvalue (eval_expr env cond) do
      eval_stmt_list env body
    done
  | ExprStmt(expr) ->
    let _ = eval_expr env expr in ()
  | DefStmt(name, args, body) ->
    let v = FunctionValue(args, body) in
    ValueEnv.assign env name v
  | ReturnStmt(expr) ->
    let v = eval_expr env expr in
    raise (PyReturn v)
            
and eval_stmt_list env stmt_list =
  List.iter (eval_stmt env) stmt_list
