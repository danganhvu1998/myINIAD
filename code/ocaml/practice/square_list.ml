let rec square_list nums_list =
    match nums_list with
        first_num::rest ->
            (
                [first_num**2.0]@ (square_list rest)   
            )
        | _ -> [];;

square_list [1.0; 2.0; 3.0];;