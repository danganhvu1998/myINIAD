import networkx as nx
from queue import PriorityQueue



def BMF(G):
    N = nx.number_of_nodes(G)
    D = [float('inf')] * N
    D[0] = 0
    for i in range(N):
        for (u, v) in G.edges():
            # D[u] = min(D[u], D[v]+G.edges[u, v]['weight'])
            D[v] = min(D[v], D[u]+G.edges[u, v]['weight'])
    return D

G= nx.read_weighted_edgelist("bf.edgelist", create_using=nx.DiGraph(), nodetype=int)
print(BMF(G))
