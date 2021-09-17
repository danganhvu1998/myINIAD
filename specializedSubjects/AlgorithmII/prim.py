import networkx as nx
from queue import PriorityQueue


def sum_between(x, y):
    res = 0;
    for runInt in range(x, y+1):
        res = res + runInt
    return res

def Prims(G):
    buff = nx.number_of_nodes(G)+5
    source = 1
    X = [0] * buff
    X[ source ] = 1
    Ans = [source]
    currConsideringEdges = PriorityQueue()
    currSum = 0

    for v in G.neighbors(source): 
        currConsideringEdges.put((G.edges[source, v]['weight'], source, v))
    while not currConsideringEdges.empty():
        # print(currConsideringEdges)
        nextVal =  currConsideringEdges.get()
        nextNode = nextVal[2]
        if( X[nextNode] ): continue
        currSum = currSum + nextVal[0]
        print('({} - {})'.format(nextVal[1], nextVal[2]))
        Ans.append(nextNode)
        X[nextNode] = 1
        for v in G.neighbors(nextNode):
            if X[v]==0:
                w = G.edges[nextNode, v]['weight']
                currConsideringEdges.put( (w, nextNode, v) )
    print(currSum)
    return Ans

G= nx.read_weighted_edgelist("test.edgelist", nodetype=int)
print(Prims(G))
