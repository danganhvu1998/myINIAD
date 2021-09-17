let f1 x = x ** 1.0;;
let f2 x = x ** 2.0;;
let f3 x = x ** 3.0;;

let deriv func =
  let deltaX = 0.0000001 in
  let delta = (func (10.0+.deltaX)) -. (func 10.0) in
  delta /. deltaX ;;

deriv f1;;
deriv f2;;
deriv f3;;
