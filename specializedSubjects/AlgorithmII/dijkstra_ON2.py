import networkx as nx
import matplotlib.pyplot as plt

def get_min(D, X):
    arg_min= -1
    min_value= float('inf')

    for i in range(len(D)):
        if D[i] < min_value:
            if i in X:
                arg_min= i
                min_value= D[i]
    return arg_min

def dijkstra(src, G):
    D= [float('inf')] * nx.number_of_nodes(G)
    D[src]= 0.0
    X= set(G.nodes)
    while X:
        u= get_min(D, X)
        X.remove(u)
        neighbors= G.neighbors(u)
        for v in neighbors:
            if v in X:
                if (D[u] + G.edges[u, v]['weight'] < D[v]):
                    D[v]= D[u] + G.edges[u, v]['weight']
    return D

G= nx.read_weighted_edgelist('dij.edgelist', nodetype=int)

print(dijkstra(0, G))

nx.draw_networkx(G)

plt.show()