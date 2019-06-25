import numpy as np 
from scipy.stats import poisson

expectedValue = 4
wantedValue = 3
print(poisson.pmf(wantedValue, expectedValue))
print(1-(poisson.pmf(0, expectedValue)+poisson.pmf(1, expectedValue)+poisson.pmf(2, expectedValue)))