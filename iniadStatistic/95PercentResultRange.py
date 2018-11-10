numMeasurement = int(input("numMeasurement:"))
standardDeviation = int(input("standardDeviation:"))
sumMeasurement=0
listMeasurement=[]
for i in range(0,numMeasurement):
    a = int(input("Result measurement number "+str(i)+": "))
    listMeasurement.append(a)
    sumMeasurement+=a
meanMeasurement = sumMeasurement/numMeasurement
rangeAbove = meanMeasurement-1.96*standardDeviation/pow(numMeasurement, 0.5)
rangeBelow = meanMeasurement+1.96*standardDeviation/pow(numMeasurement, 0.5)
print("***************************************************\n")
print("RESULT:", rangeAbove, rangeBelow)
print("\n***************************************************")