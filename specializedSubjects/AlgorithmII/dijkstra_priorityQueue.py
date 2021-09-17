import networkx as nx
import matplotlib.pyplot as plt
from queue import PriorityQueue

def dijkstra(G):
    D= [float('inf')] * nx.number_of_nodes(G)
    D[0] = 0.0
    q = PriorityQueue()
    q.put((0.0, 0))
    while ( not q.empty() ):
        nextVal = q.get()
        currDist = nextVal[0]
        currNode = nextVal[1]
        if( D[currNode]<currDist ): continue
        neighbors= G.neighbors(currNode)
        # print(neighbors)
        for neighbor in neighbors:
            if (D[currNode] + G.edges[currNode, neighbor]['weight'] < D[neighbor]):
                D[neighbor] = D[currNode] + G.edges[currNode, neighbor]['weight']
                q.put((D[neighbor], neighbor))
    return D

G= nx.read_weighted_edgelist("dij.edgelist", nodetype=int)
neighbors= G.neighbors(0)
print(dijkstra(G))
