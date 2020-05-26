let s = ref MySet.empty

let main () =
  try
    while true do
      s := MySet.add !s (read_line ())
    done
  with
    End_of_file ->
      let l = (MySet.to_list !s) in
      let rec iter = function
	  [] -> ()
	| (item, count)::tl -> (
	    Printf.printf "%7d %s" count item;
	    print_newline ();
	    iter tl
	   ) in
      iter l

let _ = main ()
