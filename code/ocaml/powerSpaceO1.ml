let pow num1 num2 =
  let rec powCompute curr num_1 num_2 =
    if num_2 = 0 then curr
    else let curr_new = curr * num_1 in
    let num_2_new = num_2 - 1 in
    powCompute curr_new num_1 num_2_new in
    powCompute 1 num1 num2;;

pow 2 10;;