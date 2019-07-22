import numpy as  np 
from scipy import stats
from scipy.stats import t

X = np.array([4.7, 4.8, 4.9, 5.3, 5.5, 5.9, 6.0])
twoside = 1
mu_0 = 5.0
avg = X.mean()
std = X.std()
N = X.size
stat_t = (avg - mu_0) / (std / np.sqrt(N))
p = t.cdf(-np.abs(stat_t), df = (N-1))*(1+twoside)

print("Stat_t =", stat_t)
print("AVG = ", avg)
print("P =", p)
print("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
if(p>=0.05):
    print("==========> Cannot reject H0")
else:
    print("==========> Can reject H0")
print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")