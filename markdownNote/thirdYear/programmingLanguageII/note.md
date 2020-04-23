# Programming Language

## OCaml and Functional Programming

1. OCaml
      1. Syntax
           1. AND => `&&`
           2. OR => `||`
           3. NOT => `not`
           4. Connet string => `^`
           5. Different => `<>`
           6. Compare => `=`  (**NOT** `==`)
           7. Using`+ - * /` for int. `+. -. *. /.` for float
           8. Example
               ```ocaml
                 # 1 + 2 ;; (*3*)
                 # 2 * 3 ;; (*6*)
                 # 1 + 2
                 -3 *
                 4;; (*9*)
                 # 1 + 2.3 ;; (* Error: both have to be float*)
                 # float_of_int 1 + 2.3 ;; (*3.3*)
                 # float_of_int 3**2.0 ;; (*float = 9*)
                 # 3.0 < 2.0 ;; (*bool = false*)
                 # "iniad" ^ "toyo" ;; (*iniadtoyo*)
                 # "iniad" <> "toyo" ;; (*bool = true*)
                 # "iniad" = "iniad" ;; (*bool = true*)
                 # "iniad" == "iniad" ;; (*bool = false*)
                 #use "file_name.ml" ;; (*Run script in file*)
                 # (3+5, 5.0, 4.0**5.0) ;; (*- : int * float * float = (8, 5., 1024.)*)
               ```
      2. Tuples: is a combination of several values to be used as a single value
         1. For taking out tuples of 2 values, fst and snd con be used
         2. Example
             ```ocaml
               # (3+5, 5.0, 4.0**5.0);;(*int * float * float = (8, 5., 1024.)*)
               # 3, true, "INIAD", 'a';;(*int * bool * string * char = (3, true, "INIAD", 'a')*)
               # fst(3, 5) ;; (*3*)
               # snd(3, 5) ;; (*5*)
             ```
2. Variables, Functions, Condition
  + Local variables: `let var=value in expression ;;`
  + Function: `let func-name arg1 arg2 ... = body-expression ;;`
    + Recursive Function: `let rec func-name arg1 arg2 ... = body-expression ;;`
    + Calling: `func-name arg1 arg2 ... ;;`
  + Condition: `if condition then expression else expression ;;`
  + Curring: [DERIV.ML](../../../code/ocaml/deriv.ml) **Not yet sure what is currying**
  + Example
    + [GCD.ML](../../../code/ocaml/gcd.ml)
    + [IsPrime.ML](../../../code/ocaml/isPrime.ml)
    + [DERIV.ML](../../../code/ocaml/deriv.ml)

