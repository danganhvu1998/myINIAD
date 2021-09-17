import numpy as  np 
from scipy import stats
from scipy.stats import t

x1 = np.array([53.1, 50.3, 59.5, 62.0, 58.6, 56.5, 53.5])
x2 = np.array([51.3, 48.8, 53.6, 56.2, 52.5, 53.0, 53.4])
X = x1 - x2;
twoside = 0
mu_0 = 0
avg = X.mean()
std = np.std(X, ddof = 1)
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