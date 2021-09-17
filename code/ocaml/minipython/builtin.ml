open Syntax

let print args =
  List.iter (fun v -> print_string ((string_of_pyvalue v) ^ " ")) args;
  print_newline ();
  NoneValue

let input args =
  let prompt = 
    match args with
      [StrValue(s)] -> s
    | [] -> ""
    | _ -> failwith "bad arguments"
  in print_string prompt;
  StrValue(read_line ())
