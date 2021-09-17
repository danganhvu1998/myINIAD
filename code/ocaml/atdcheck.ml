type lat_lng = float * float;;

type lat_lng_op = 
  Value of lat_lng
  | Null
;;

let north_of_iniad value =
  match value with
    Value(lat, lng) ->
      if lat < 35.780246 then Some(true)
      else Some(false)
    | Null -> None
    | _ -> Some(false);;

let akaSta = Value(35.777615, 139.7209868);;
north_of_iniad akaSta;;
north_of_iniad Null;;

(* #use "atdcheck.ml";; *)