from scipy.stats import expon

def f(n, expectValue):
    return expon.cdf(n, scale = 1/expectValue)


print(f(1/3, 5))
# expon.cdf(wantedValue, scale = 1/expectValue) mean in 1 unit time, 
# certain even is expected to happend expectedValue time. 
# Return chance in 1 unit time that even occur wantedValue times or LESS

# Let the interval of customer arrival at the gate subject to the exponential distribution, whose expected
# value is 30 [seconds] in a station. Then, find the probability that the interval is 1 minute or more, and 2
# minutes or less.
expectedValue = 2
print(f(2, expectedValue)-f(1, expectedValue))