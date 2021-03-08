type 'a btree = 
  Node of 'a * 'a btree * 'a btree
| Leaf

let rec flatten = function
  Node(value_of_node, left_tree, right_tree) ->
    (flatten left_tree) @ [value_of_node] @ (flatten right_tree)
  | Leaf -> [];;

flatten (Node(1, Node(2, Leaf, Node(3, Leaf, Leaf)), Node(4, Leaf, Leaf)));;