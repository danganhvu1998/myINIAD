import networkx as nx

def BMF(G, startNode):
    N = nx.number_of_nodes(G)
    print(N)
    D = [float('inf')] * N
    D[startNode] = 0
    for i in range(N):
        for (u, v) in G.edges():
            D[u] = min(D[u], D[v]+G.edges[u, v]['weight'])
            D[v] = min(D[v], D[u]+G.edges[u, v]['weight'])
    return D

def set_shortestpath(G, Y):
    res = []
    for node in Y:
        res.append( BMF(G, node) )
    return res

G= nx.read_weighted_edgelist("bf.edgelist", nodetype=int)
print(set_shortestpath(G, [0,1,2,3,4]))
