let greet() = 
  print_string "Name: ";
  let name = read_line() in 
    print_endline("Good morning, " ^name);
  print_endline("Hello, " ^name);
  print_endline("Good night, " ^name);
  name;;

print_string("Great day, " ^ greet());;