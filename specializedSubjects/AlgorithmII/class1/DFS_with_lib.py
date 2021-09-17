import networkx as nx

def isHasEulerCircle(graph):
    nodes = graph.nodes()
    for node in nodes:
        # print(node, graph.degree[node])
        if int(graph.degree[node]%2==1) : return False
    return True

G = nx.read_edgelist('./test.edgelist', nodetype=int)
print( isHasEulerCircle(G) )
