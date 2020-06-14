import networkx as nx
import numpy as np

G = nx.read_edgelist('pr.edgeList', create_using=nx.DiGraph(), nodetype=int)
n = nx.number_of_nodes(G)
A = nx.adjacency_matrix(G, nodelist=range(n), weight=None)

A = A.todense()
A = A.astype(float)
print(A)

A = A.transpose()
cols_sum = A.sum(axis=0)
cols_sum[0, 1]
print(A)
print(cols_sum)
for i in range(n):
    if (cols_sum[0, i]):
        A[:, i] = A[:, i]/cols_sum[0, i]
    else: 
        A[:, i] = 1.0/n
print(A)