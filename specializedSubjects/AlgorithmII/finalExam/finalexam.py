import networkx as nx
import numpy as np
import queue

def my_extract_min2(D, X):
  arg_min = -1
  min_value = float('inf')
  for i in X:
    if D[i] < min_value:
        arg_min = i
        min_value = D[i]
  return arg_min


def my_Dijkstra(G, source):
  X = set(G.nodes)
  D = [float('inf')] * nx.number_of_nodes(G)
  D[source] = 0
  P = [0] * nx.number_of_nodes(G)
  #iteration begin
  while X:
    u = my_extract_min2(D, X)
    X.remove(u)
    for v in G.neighbors(u):
      if v in X:
        new_distance = D[u] + G.edges[u, v]['weight']
        if D[v] > new_distance:
          D[v] = new_distance
          P[v] = u
  #iteration end
  return D, P


def restore_shortestpath(u, v, P):
  path = []
  temp = v
  while temp != u:
    parent = P[temp]
    path.append((parent, temp))
    temp = parent
  path.reverse()
  return path


def find_augmentpath(N, s, t):
  P = [s] * nx.number_of_nodes(N)
  visited = set()
  stack = queue.LifoQueue()
  stack.put(s)
  while not stack.empty():
    v = stack.get()
    if v == t:
      return P, True
    if not v in visited:
      visited.add(v)
      for w in N.neighbors(v):
        if not w in visited and N.edges[v, w]['weight'] > 0:
          stack.put(w)
          P[w] = v
  return P, False


def min_capacity(N, path):
  min_cap = float('inf')
  for u, v in path:
    capacity = N.edges[u, v]['weight']
    if capacity < min_cap:
      min_cap = capacity
  return min_cap


def increase_flow(N, path, amount, flow):
  for u, v in path:
    if flow[(v, u)] <= 0:
      flow[(u, v)] += amount
    else:
      diff = flow[(v, u)] - amount
      if diff >= 0:
        flow[(v, u)] = diff
      else:
        flow[(u, v)] = -diff
        flow[(v, u)] = 0
    
    N.edges[u, v]['weight'] -= amount
    if N.has_edge(v, u):
      N.edges[v, u]['weight'] += amount
    else:
      N.add_edge(v, u, weight=amount)

def my_Ford_Fulkerson(G, s, t):
  N = G.copy()
  f = {}
  for u, v in N.edges:
    f[(u, v)] = 0
    f[(v, u)] = 0
  P, is_found = find_augmentpath(N, s, t)
  while is_found:
    augmentpath = restore_shortestpath(s, t, P)
    min_cap = min_capacity(N, augmentpath)
    increase_flow(N, augmentpath, min_cap, f)
    P, is_found = find_augmentpath(N, s, t)
  return N, f

def mincut_dfs(G, source):
  visited = set()
  stack = queue.LifoQueue()
  stack.put(source)
  while not stack.empty():
    v = stack.get()
    if not v in visited:
      visited.add(v)
    for w in G.neighbors(v):
        if not w in visited and G.edges[v, w]['weight'] > 0:
          stack.put(w)
  return visited, set(G.nodes)-visited

      

if __name__ == '__main__':
  G = nx.read_weighted_edgelist('ff.edgelist', create_using=nx.DiGraph(), nodetype=int)
  s = 0
  t = 5
  N, f = my_Ford_Fulkerson(G, s, t)
  print(f)
  