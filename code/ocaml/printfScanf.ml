Printf.printf "%d %08x %b %s\n" 12 345 false "Hello"
Scanf.sscanf "123 456 789" "%d %s %f" (fun x y z -> (x,y,z))