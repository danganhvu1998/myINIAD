(* simple type-checking *)

type pyvalue =
  IntVal of int
| StrVal of string
| FloatVal of float

type pytype =
  IntType
| StrType
| FloatType

type pyexpr =
  Add of pyexpr * pyexpr  (* e1 + e2 *)
| Mul of pyexpr * pyexpr  (* e1 * e2 *)
| Value of pyvalue


(* program execution *)
let mulStringInt aStr aInt =
  let rec mulStrInt currAns str currInt =
    if( currInt = 0 ) then currAns
    else mulStrInt (currAns^str) str (currInt-1)
  in mulStrInt "" aStr aInt;;

let rec eval_expr = function
  Add(e1, e2) ->
  begin
    match eval_expr e1, eval_expr e2 with
      IntVal(v1), IntVal(v2) -> IntVal(v1 + v2)
    | StrVal(v1), StrVal(v2) -> StrVal(v1 ^ v2)
    | FloatVal(v1), FloatVal(v2) -> FloatVal(v1 +. v2)
    | FloatVal(v1), IntVal(v2) | IntVal(v2), FloatVal(v1)-> FloatVal(v1 +. float v2)
    | _ -> failwith "type error"
  end      
| Mul(e1, e2) ->
  begin
    match eval_expr e1, eval_expr e2 with
      IntVal(v1), IntVal(v2) -> IntVal(v1 * v2)
    | FloatVal(v1), FloatVal(v2) -> FloatVal(v1 *. v2)
    | FloatVal(v1), IntVal(v2) | IntVal(v2), FloatVal(v1)-> FloatVal(v1 *. float v2)
    | IntVal(n), StrVal(s) | StrVal(s), IntVal(n) -> StrVal( mulStringInt s n )
    | _ -> failwith "type error"
  end
| Value(v) -> v

(* type checking *)
let rec type_expr = function
  Add(e1, e2) ->
  begin
    match type_expr e1, type_expr e2 with
      IntType, IntType -> IntType
    | StrType, StrType -> StrType
    | FloatType, FloatType -> FloatType
    | FloatType, IntType | IntType, FloatType -> FloatType
    | _ -> failwith "type error"
  end
| Mul(e1, e2) ->
  begin
    match type_expr e1, type_expr e2 with
      IntType, IntType -> IntType
    | IntType, StrType | StrType, IntType -> StrType
    | FloatType, FloatType -> FloatType
    | FloatType, IntType | IntType, FloatType -> FloatType
    | _ -> failwith "type error"
  end
| Value(IntVal(_)) -> IntType
| Value(StrVal(_)) -> StrType
| Value(FloatVal(_)) -> FloatType


(* type of 1 + 2 *)
let t1 = type_expr (Add(Value(IntVal(1)), Value(IntVal(2))))
let t1 = eval_expr (Add(Value(IntVal(1)), Value(IntVal(2))))

(* type of 3 * "abc" *)
let t2 = type_expr (Mul(Value(IntVal(3)), Value(StrVal("abc"))))
let t2 = eval_expr (Mul(Value(IntVal(3)), Value(StrVal("abc"))))

(* type of 3 * 3.0 *)
let t3 = type_expr (Mul(Value(IntVal(3)), Value(FloatVal(3.0))))
let t3 = eval_expr (Mul(Value(IntVal(3)), Value(FloatVal(3.0))))


(* type of 3 * "abc" *)
let f1 = type_expr (Mul(Value(FloatVal(3.0)), Value(StrVal("abc"))))
let f1 = eval_expr (Mul(Value(FloatVal(3.0)), Value(StrVal("abc"))))