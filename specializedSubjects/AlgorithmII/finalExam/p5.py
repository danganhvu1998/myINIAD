import networkx as nx

def project_network(G, profit):
    Gp = G.copy()
    infVal = 1
    startPos = nx.number_of_nodes(G)
    endPos = startPos + 1
    for i in range(nx.number_of_nodes(G)):
        val = profit[i]
        if val > 0: 
            infVal += val
            Gp.add_edge(startPos, i, weight = val)
        else:
            Gp.add_edge(i, endPos, weight = -val)
    for u, v in G.edges:
        Gp.edges[(u, v)]['weight'] = infVal
    return Gp

G = nx.read_weighted_edgelist('test.txt', create_using=nx.DiGraph(), nodetype=int)
profit = [15, 30, 10, -15, -20, -5]
Gp = project_network(G, profit)
print(Gp.edges(data=True))