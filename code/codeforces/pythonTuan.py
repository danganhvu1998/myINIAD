# -*- coding: utf-8 -*-
"""Untitled12.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1Yv7dHvP9BWW-xJuobGXm1rO-cGuT7cf2
"""

T = int(input())
for i in range(T):
  data = []
  items = dict()
  
  n,m = (input().split())
  n = int(n)
  m = int(m)
  for j in range(n):
    s = input()
    data.append(s.split())

  for j in range(n):
    for start in range(len(data[j])):
      for end in range(min(11,len(data[j])-start)):
        s = ' '.join(data[j][start:start+end+1])
        ['aa','bb','cc'] -> "aa bb cc"
        #apple limes -- apple lettuce limes a
        if s in items.keys():
          items[s] += 1
        else:
          items[s] = 1
  
  print('Case {0}:'.format(i+1))
  for j in range(m):
    q = input()
    if q in items.keys():
      print(items[q])
    else:
      print(0)


      onion cranberries apple limes apple limes
      
    onion onion onion onion onion onion onion