import numpy as  np 
from scipy import stats
from scipy.stats import norm

X = np.array([96, 94,96,97,98,99,100,95,95,94])
twoside = 0
mu_0 = 95
avg = X.mean()
std = 12
N = X.size
z = (avg - mu_0) / (std / np.sqrt(N))
p = norm.cdf(-np.abs(z), 0, 1)*(1+twoside)

print("Z =", z)
print("AVG = ", avg)
print("P =", p)
print("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
if(p>=0.05):
    print("==========> Cannot reject H0")
else:
    print("==========> Can reject H0")
print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")