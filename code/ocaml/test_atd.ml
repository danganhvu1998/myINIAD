type location =    
  LatLng of { lat : float; lng : float; }  
| Place of { name : string; }

type way = Walk | Fly | Car | Train

let cal w p1 p2 = 
  match w with
    Walk -> 4*((p1.lat - p2.lat)**2 + (p1.lng - p2.lng)**2)**(1/2)
  | Fly -> 800*((p1.lat - p2.lat)**2 + (p1.lng - p2.lng)**2)**(1/2)
  | Car -> 50*((p1.lat - p2.lat)**2 + (p1.lng - p2.lng)**2)**(1/2)
  | Train -> 90*((p1.lat - p2.lat)**2 + (p1.lng - p2.lng)**2)**(1/2)

let duration w p1 p2 =
  match p1, p2 with
    LatLng(p1), LatLng(p2) -> cal w p1 p2
  | _ -> failwith "type error"

duration Walk (1,2) (3,4);;