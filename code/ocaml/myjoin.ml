let myjoin xs str =
  let rec _join currAns currXs str = 
    match currXs with 
      firstElement::theRestOfArr -> (_join (currAns^firstElement^str) theRestOfArr str)
      | [] -> 
        let n = String.length currAns in
        String.sub currAns 0 (n-1)
  in _join "" xs str;;

myjoin ["aiueo"; "kakikukeko"; "sasisuseso"; "tatituteto"; "naninuneno"] "+";;
