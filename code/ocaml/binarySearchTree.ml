type 'a binaryTree =
  Node of 'a * 'a binaryTree  * 'a binaryTree
  | Leaf;;

let aLittleBTree = Node(
  100,
  Node(50,
    Node(25,Leaf,Leaf),
    Node(75,Leaf,Leaf)),
  Node(200,
    Node(150,
      Node(125,Leaf,Leaf),
      Node(175,Leaf,Leaf)),
    Node(250,Leaf,Leaf)));;

let rec count_bst aBTree = 
  match aBTree with
    Node(_, leftTree, rightTree) -> 1 + (count_bst leftTree ) + (count_bst rightTree )
    | Leaf -> 0;;
count_bst aLittleBTree;;

let rec min_bst_ aBTree = 
  match aBTree with
    Node(nodeVal, lt, rt) -> (min (min nodeVal (min_bst_ lt)) (min_bst_ rt))
    | Leaf -> 1000000000;;
min_bst_ aLittleBTree;;

let min_bst aBTree = 
  let rec findMin currMin tree =
    match tree with
      Node(nodeVal, lt, _) -> findMin nodeVal lt
      | Leaf -> currMin
  in findMin 100000 aBTree;;
min_bst aLittleBTree;;

let append_bst addVal aBTree = 
  let newNode = Node(addVal, Leaf, Leaf) in
  let rec findPlace tree =
    match tree with
      Node(nodeVal, lt, rt) -> 
        if (nodeVal>addVal) 
          then 
            let lt = (findPlace lt)
            in Node(nodeVal, lt, rt)
          else 
            let rt = (findPlace rt)
            in Node(nodeVal, lt, rt)
      | Leaf -> newNode
  in findPlace aBTree;;

let appended_bst = append_bst 10 aLittleBTree;;
min_bst appended_bst;;
(* #use "binarySearchTree.ml";; *)