import networkx as nx
import finalexam

def all_shortestpath(G):
  DD = []
  for i in range(nx.number_of_nodes(G)):
    D, P = finalexam.my_Dijkstra(G, i)
    DD.append(D)
  return DD

G = nx.read_weighted_edgelist('test.txt', nodetype=int)
DD = all_shortestpath(G)
print(DD[0])
print(DD[3])