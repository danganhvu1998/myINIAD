let n = 3;;

let rec printLine i =
  if( i<n ) then 
    let line = read_line() in
    print_string line;
    printLine (i+1)
  else 
    ();;
printLine 0;;