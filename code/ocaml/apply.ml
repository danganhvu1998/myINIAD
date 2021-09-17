let apply aFunction aInt =
  let applyFunc bInt =
    let rec runFunc cFunction cInt currAns = 
      if cInt = 0 then currAns
      else runFunc cFunction (cInt-1) (cFunction currAns)
    in runFunc aFunction aInt bInt
  in applyFunc;;

let mysqrt value =
  let nextX currX = currX -. (currX*.currX-.value)/.(2.0*.currX) in
  let solve = apply nextX 100 in
  solve value;;

mysqrt 1.0;;
mysqrt 2.0;;
mysqrt 3.0;;
mysqrt 4.0;;
