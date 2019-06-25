import numpy as np 
from scipy.stats import poisson

expectedValue = 4
wantedValue = 3
print(poisson.pmf(wantedValue, expectedValue))