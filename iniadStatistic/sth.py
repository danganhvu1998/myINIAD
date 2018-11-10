from scipy.stats import norm

#print(norm.ppf(0.975), norm.ppf(0.025))
mean = 5
standardDeviation = 3
value1 = -1.6
value2 = 1.7
print(abs(norm.cdf(value1, loc=mean, scale=standardDeviation)-norm.cdf(value2, loc=mean, scale=standardDeviation)))