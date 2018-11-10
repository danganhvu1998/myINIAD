from scipy.stats import norm

#norm.cdf(A, loc=B, scale=C) -> Ratio that value from -oo -> A if Mean(Expected Value) = B, Standard Deviation = C
print(norm.cdf(25, loc=10, scale=5)) #0.9986501019683699
#Value from -oo->25 is about 99.86% in total of a set with Mean(Expected Value) = 10, Standard Deviation = 5

#norm.ppf(A)*B+C -> Value D that from -oo -> D with Mean(Expected Value) = C, Standard Deviation = C has Ratio = A
print(norm.ppf(0.1)*15+60) #40.77672651683099
#Value from -oo->40.78 is about 10% in total of a set with Mean(Expected Value) = 60, Standard Deviation = 15

mean = 60
standardDeviation = 10
value1 = 60
value2 = 50
print(abs(norm.cdf(value1, loc=mean, scale=standardDeviation)-norm.cdf(value2, loc=mean, scale=standardDeviation)))