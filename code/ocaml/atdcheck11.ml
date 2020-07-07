type location =    
  LatLng of { lat : float; lng : float; }  
| Place of { name : string; }

let haha1 = LatLng{lat=10.0; lng=10.0};;
let haha2 = LatLng{lat=20.0; lng=20.0};;
type way = Walk | Fly | Car | Train

let distance local1 local2  =
  match local1, local2 with
    LatLng{lat=lat1; lng=lng1}, LatLng{lat=lat2; lng=lng2} -> 
      let res = (lat2-.lat1)*.(lat2-.lat1)+.(lng1-.lng2)*.((lng1-.lng2)) 
      in res ** 0.5
    | _ -> 0.0;;

let distanceMatchInMatch local1 local2  =
  match local1 with
    LatLng{lat=lat1; lng=lng1} ->
      ( 
        match local2 with
          LatLng{lat=lat2; lng=lng2} ->
            let res = (lat2-.lat1)*.(lat2-.lat1)+.(lng1-.lng2)*.((lng1-.lng2)) 
            in res ** 0.5
          | _ -> 0.0;
      )
    | _ -> 0.0;;
  
let speed theWay = 
  match theWay with
    Walk -> 4.0;
    | Fly -> 800.0;
    | Car -> 50.0;
    | Train -> 90.0;;

let duration theWay local1 local2 =
  let dist = distance local1 local2
  in let spd = speed theWay
  in dist /. spd;;

let durationMatchInMatch theWay local1 local2 =
  let dist = distanceMatchInMatch local1 local2
  in let spd = speed theWay
  in dist /. spd;;  

duration Walk haha1 haha2;;
durationMatchInMatch Walk haha1 haha2;;