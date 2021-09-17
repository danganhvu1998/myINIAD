# You are given the root of a binary tree. Find the path between 2 nodes that maximizes the sum of all the nodes in the path, and return the sum. The path does not necessarily need to go through the root.

class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

valSave = {}
res = 0

def maxLineStartWith(node):
  global res, valSave
  if(node == None): return 0
  if(node.left == None and node.right == None): valSave[node] =  node.val
  else: valSave[node] = max(0, maxLineStartWith(node.left), maxLineStartWith(node.right))+node.val
  return valSave[node]

def maxPathValueWithTopIs(node):
  global res, valSave
  maxVal = 0
  if(node == None): return
  if(node.left == None or node.right == None): maxVal = valSave[node]
  else: maxVal = max(0 , valSave[node.left]+valSave[node.right]) + node.val
  res = max(res, maxVal)
  print(node.val, maxVal, valSave[node])
  maxPathValueWithTopIs(node.left)
  maxPathValueWithTopIs(node.right)

def maxPathSum(root):
  global res, valSave
  maxLineStartWith(root)
  res = valSave[root]
  maxPathValueWithTopIs(root)
  return res
  

# (* denotes the max path)
#       *10
#       /  \
#     *2   *10
#     / \     \
#   *20  1    -25
#             /  \
#            3    4
root = Node(10)
root.left = Node(2)
root.right = Node(10)
root.left.left = Node(20)
root.left.right = Node(1)
root.right.right = Node(-25)
root.right.right.left = Node(3)
root.right.right.right = Node(4)
print(maxPathSum(root))
# 42