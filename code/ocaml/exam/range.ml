let range vals_list num_start num_end =
  let rec add_num vals curr_list curr_num num_end =
    if curr_num >= num_end then curr_list
    else add_num vals (curr_list @ [List.nth vals curr_num]) (curr_num+1) num_end;
  in add_num vals_list [] num_start num_end;;

range [1;2;3;4;5] 1 3;;
range ["Information"; "Networking"; "for"; "Innovation"; "and"; "Design"] 0 4;;