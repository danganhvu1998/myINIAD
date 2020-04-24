edges = [[]]*1000
ck = [0]*1000

with open('test.txt') as f:
    for line in f: # read rest of lines
        a, b = [int(x) for x in line.split()]
        edges[a].append(b)
        edges[b].append(a)

def DFS(node):
  if ck[node]==1: return
  ck[node] = 1
  print(node)
  for child in edges[node]:
    DFS(child)

DFS(0)
