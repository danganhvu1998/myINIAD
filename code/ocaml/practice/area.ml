type figure =
  Circle of float                (* Circle(r) represents a circle whose radius is r *)
| Rectangle of float * float     (* Rectangle(w, h) represents a rectangle with width w and height h *)

let area figure =
  match figure with
    Circle(r) -> r *. r *. 3.14159
    | Rectangle(w, h) -> w *. h;;

area (Circle(2.0));;
area (Rectangle(3.0, 4.0));;