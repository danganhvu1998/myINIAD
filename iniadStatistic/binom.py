import numpy as np 
from scipy.stats import binom

def f(n):
    p = 0.01 # Chance
    N = 5# Total Number 
    return binom.pmf(n, N, p)
    # binom.pmf(v, N, p)) Chance that v times occur over N total trial wich each time p chance to happen

print(f(0)+f(2)+f(1)) # p chance, total 
