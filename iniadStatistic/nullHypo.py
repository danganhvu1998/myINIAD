import numpy as  np 
from scipy import stats
from scipy.stats import norm

X = np.array([4.7, 4.8, 4.9, 5.3, 5.5, 5.9, 6.0])
twoside = 1
mu_0 = 5
avg = X.mean()
std = 1
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