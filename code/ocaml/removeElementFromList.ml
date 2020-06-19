let remove aList pos =
  let rec removeElement currList leftList currPos = 
    match leftList with
      ft::rest -> 
        if currPos != 0 then 
          let currList = currList@[ft] in
          removeElement currList rest (currPos-1)
        else removeElement currList rest (currPos-1)
      | [] -> currList
  in removeElement [] aList pos;;

remove [0; 1; 2] 0;;
remove [0; 1; 2] 1;;
remove [0; 1; 2] 2;;
remove [0; 1; 2] 3;;