# The h-index is a metric that attempts to measure the productivity and citation impact of the publication of a scholar. The definition of the h-index is if a scholar has at least h of their papers cited h times.
# Given a list of publications of the number of citations a scholar has, find their h-index.
import numpy as np

def checkHIndex(publications, H):
  return publications[publications>=H].shape[0] >= H

def hIndex(publications):
  N = len(publications)
  publicationsNP = np.array(publications)
  smallest = 0
  biggest = N
  while(smallest<biggest-2):
    print(smallest, biggest)
    avg = int((smallest+biggest)/2)
    if(checkHIndex(publicationsNP, avg)):
      smallest = avg
    else:
      biggest = avg
  curr = biggest
  while(curr>0):
    if(checkHIndex(publicationsNP, curr)): return curr
    curr -= 1
  return 0

    
#print
print(hIndex(list(range(0, 100000))))
# 3