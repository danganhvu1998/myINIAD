import networkx as nx
import matplotlib.pyplot as plt

G = nx.read_edgelist('test.txt', nodetype=int)

nx.draw_networkx(G)
plt.show()
print(G.nodes())
