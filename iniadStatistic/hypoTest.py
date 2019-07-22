import numpy as  np 
from scipy import stats
from scipy.stats import norm
from scipy.stats import t

twoside = 0
mu_0 = 2000
avg = 1900
std = 150
N = 15
stat_t = (avg - mu_0) / (std / np.sqrt(N))
p = t.cdf(-np.abs(stat_t), df = N-1)*(1+twoside)

print("Stat_t =", stat_t)
print("AVG = ", avg)
print("P =", p)
print("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
if(p>=0.05):
    print("==========> Cannot reject H0")
else:
    print("==========> Can reject H0")
print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")