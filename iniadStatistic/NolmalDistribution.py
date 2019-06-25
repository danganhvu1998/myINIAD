from scipy.stats import norm

def notRun():
    #norm.cdf(A, loc=B, scale=C) -> Ratio that value from -oo -> A if Mean(Expected Value) = B, Standard Deviation = C
    print(norm.cdf(25, loc=10, scale=5)) #0.9986501019683699
    #Value from -oo->25 is about 99.86% in total of a set with Mean(Expected Value) = 10, Standard Deviation = 5

    #norm.ppf(A)*B+C -> Value D that from -oo -> D with Mean(Expected Value) = C, Standard Deviation = C has Ratio = A
    print(norm.ppf(0.1)*15+60) #40.77672651683099
    #Value from -oo->40.78 is about 10% in total of a set with Mean(Expected Value) = 60, Standard Deviation = 15
    

mean = 6
standardDeviation = 3
value1 = -3
value2 = 9
print("From", value1, "to", value2, "is",str(abs(norm.cdf(value1, loc=mean, scale=standardDeviation)-norm.cdf(value2, loc=mean, scale=standardDeviation))*100)+"% Data Quantity")

#Set mean = 0 and SD = 1 when to find persentage
mean = 0
standardDeviation = 1
percentDataQuantity = 95
print(str(percentDataQuantity)+"% Data Quantity is from -oo to",norm.ppf(percentDataQuantity/100.0)*standardDeviation+mean)
