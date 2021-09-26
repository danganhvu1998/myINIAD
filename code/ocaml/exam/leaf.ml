type 'a btree = 
  Node of 'a * 'a btree * 'a btree
| Leaf

let rec leaves = function
  Node(value_of_node, left_tree, right_tree) ->
    (leaves left_tree) + (leaves right_tree)
  | Leaf -> 1;;

let tree = Node(1, Node(3, Leaf, Node(6, Leaf, Leaf)), Node(4, Leaf, Node(2, Leaf, Leaf)));;
leaves tree;;