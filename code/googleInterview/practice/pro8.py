#A k-ary tree is a tree with k-children, and a tree is symmetrical if the data of the left side of the tree is the same as the right side of the tree.
class Node():
  def __init__(self, value, children=[]):
    self.value = value
    self.children = children



def check(node, currMulty, powerNumber):
  oo=1000000007
  res = pow(node.value, powerNumber)*currMulty
  currMulty = (currMulty*node.value)%oo
  for child in node.children:
    res = (res + check(child, currMulty, powerNumber))%oo
  return res

def is_symmetric(root):
  for i in range(1, 10):
    if(check(root.children[0], 1, i) != check(root.children[1], 1, i)):
      return False
  return True
  # Fill this in.

tree = Node(4)
tree.children = [Node(3), Node(3)]
tree.children[0].children = [Node(9), Node(4), Node(1)]
tree.children[1].children = [Node(1), Node(4), Node(9)]
print(is_symmetric(tree))
# True