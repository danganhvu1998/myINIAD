import numpy as np 
from scipy.stats import binom

def f(n):
    p = 1.0/3 # Chance
    N = 5# Total Number 
    return binom.pmf(n, N, p)
    # binom.pmf(v, N, p)) Chance that v times occur over N total trial wich each time p chance to happen

print(f(3)+f(2)+f(1)+f(0)) # p chance, total 
