import networkx as nx
import numpy as np

def matrixConstructor(G):
    n = nx.number_of_nodes(G)
    A = nx.adjacency_matrix(G, nodelist=range(n), weight=None)
    A = A.todense()
    A = A.astype(float)
    print(A)
    A = A.transpose()
    # print(A)
    cols_sum = A.sum(axis=0)
    print(cols_sum)
    for i in range(n):
        if (cols_sum[0, i]):
            A[:, i] = A[:, i]/cols_sum[0, i]
        else: 
            A[:, i] = 1.0/n
    print(A)
    return A

def update(G,v,d,k):
    A = matrixConstructor(G)
    for i in range(k):
        v = d * A * v + (1-d) * v
    return v

G = nx.read_edgelist('pr.edgeList', create_using=nx.DiGraph(), nodetype=int)
n = nx.number_of_nodes(G)
result = update(G, np.full((n,1), 1.0/n), 1, 1)
print(result)

# result = np.full((n,1), 1.0/n)
# print(result)
# while(1):
#     nextResult = 0.85 * A * result + 0.15 * result
#     print("START FOR DEBUG #######################")
#     print(nextResult)
#     print(result)
#     print("END FOR DEBUG   #######################")
#     if( np.amax( np.absolute(nextResult - result) ) < 0.0001 ): break
#     result = nextResult
# print(result)