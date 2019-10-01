import numpy as  np 
from scipy import stats
from scipy.stats import norm
from scipy.stats import t

twoside = 0
mu_0 = 95
avg = 125.9
std = 1.6
N = 70
stat_t = (avg - mu_0) / (std / np.sqrt(N))
#p = t.cdf(-np.abs(stat_t), df = N-1)*(1+twoside)
p = norm.cdf(-np.abs(stat_t), 0, 1)*(1+twoside)

print("Stat_t =", stat_t)
print("AVG = ", avg)
print("P =", p)
print("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
if(p>=0.05):
    print("==========> Cannot reject H0")
else:
    print("==========> Can reject H0")
print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
