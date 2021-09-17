import numpy as  np 
from scipy import stats
from scipy.stats import t

X = np.array([2000, 3200, 2800, 4000, 1500, 2200, 3500, 2800])
twoside = 1
mu_0 = 25
avg = X.mean()
std = np.std(X, ddof = 1)
N = X.size
stat_t = (avg - mu_0) / (std / np.sqrt(N))
p = t.cdf(-np.abs(stat_t), df = (N-1))*(1+twoside)

print("Stat_t =", stat_t)
print("AVG = ", avg)
print("STD = ", std)
print("P =", p)
print("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
if(p>=0.05):
    print("==========> Cannot reject H0")
else:
    print("==========> Can reject H0")
print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")