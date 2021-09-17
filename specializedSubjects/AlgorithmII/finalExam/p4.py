import networkx as nx
import finalexam

def residual_network(G, f):
  N = G.copy()
  print(N.edges(data=True))
  for (u, v), amount in f.items():
    print(u,v , amount, N.edges[(u, v)])
    N.edges[(u, v)]['weight'] -= amount
    if not G.has_edge(v, u):
      N.add_edge(v, u, weight = 0)
    N.edges[(v, u)]['weight'] += amount
  return N

G = nx.read_weighted_edgelist('test.txt', create_using=nx.DiGraph(), nodetype=int)
f = {(0, 1) : 5, (1, 2): 5, (2, 3) : 5}
N = residual_network(G, f)
print(N.edges(data=True))