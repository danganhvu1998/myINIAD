import random

tryCount = 10000000
alpha = 1
contentCount = 10
cacheSize = 10

def popularity(k, s = alpha, N = contentCount):
    totalPopularity = 0.0
    for i in range(N):
        totalPopularity += 1 / (i+1) ** s
    return ( 1 / k ** s ) / totalPopularity

print(popularity(2, 1, 10))