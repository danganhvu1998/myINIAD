module Iniad:
  sig
    val is: unit -> string
  end=
  
  struct
    let is () = "Information Networking for Innovation and Design"
  end;;

Iniad.is ();; 