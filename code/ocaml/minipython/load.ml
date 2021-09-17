(* counts the number of leading space characters; returns -1 if the line only contains whitespaces *)
let count_leading_spaces line =
  let rec count cnt i =
    if i >= (String.length line) then -1
    else
      match line.[i] with
        ' ' -> count (cnt+1) (i+1)
      | '\t' -> count (cnt+4) (i+1)
      | '\n' | '\r' -> count 0 (i+1)
      | _ -> cnt
  in count 0 0

let current_level levels =
  match levels with
    lvl::_ -> lvl
  | [] -> 0

let make_indent_line n = (String.make n ' ') ^ "{"
let make_dedent_line n = (String.make n ' ') ^ "}"

(* converts Python-style indentation to C-style block *)
let convert_block p =
  let lines = Str.split_delim (Str.regexp "\n") p in
  let lines', levels' =
    List.fold_left
      (fun (lines, levels) line ->
         let cur = count_leading_spaces line in
         if cur < 0 then (line::lines, levels)
         else
           let prev = current_level levels in
           if cur > prev then (line::(make_indent_line prev)::lines, cur::levels)
           else
             let rec dedent (lines, levels) =
               let prev = current_level levels in
               if cur = prev then (lines, levels)
               else if cur < prev then
                 match levels with
                   _::rest -> dedent ((make_dedent_line (current_level rest))::lines, rest)
                 | [] -> failwith "This should not happen"
               else failwith "Indentation Error"
             in let (lines', levels') = dedent (lines, levels)
             in (line::lines', levels'))
      ([], []) lines
  in let lines'' =
       let rec iter lines levels =
         match levels with
           _::lvl::tl -> iter ((make_dedent_line lvl)::lines) tl
         | _::[] -> (make_dedent_line 0)::lines
         | [] -> lines
       in iter lines' levels'
  in (String.concat "\n" (List.rev lines'')) ^ "\n"

let load_file f =
  let ic = open_in f in
  let n = in_channel_length ic in
  let s = really_input_string ic n in
  close_in ic; s
