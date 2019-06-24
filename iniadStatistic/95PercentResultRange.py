import scipy.stats as st

def knownSD(listMeasurement, standardDeviation):
    numMeasurement = len(listMeasurement)
    sumMeasurement = 0
    for measurement in listMeasurement:
        sumMeasurement+= measurement
    meanMeasurement = sumMeasurement/numMeasurement

    rangeBelow = meanMeasurement-1.959963984540054*standardDeviation/pow(numMeasurement, 0.5)
    rangeAbove = meanMeasurement+1.959963984540054*standardDeviation/pow(numMeasurement, 0.5)
    print("***************************************************\n")
    print("RESULT:",rangeBelow, " -> ",rangeAbove)
    print("RESULT:",round(rangeBelow, 2), " -> ",round(rangeAbove, 2))
    print("\n***************************************************")

def unknownSD(listMeasurement):
    numMeasurement = len(listMeasurement)
    sumMeasurement = 0
    for measurement in listMeasurement:
        sumMeasurement+= measurement
    meanMeasurement = sumMeasurement/numMeasurement
    #calculate S
    S2 = 0
    for measurement in listMeasurement:
        S2 += pow((measurement-meanMeasurement), 2)
    S2/=(numMeasurement-1)
    S = pow(S2, 0.5)

    #calculate T-distribution (LOL wtf is this)
    T_distribution = abs(st.t.ppf(0.05/2, numMeasurement-1)) #95%
    #T_distribution = abs(st.t.ppf(0.01/2, numMeasurement-1)) #99%

    #calculate 95% range
    rangeBelow = meanMeasurement-T_distribution*S/pow(numMeasurement, 0.5)
    rangeAbove = meanMeasurement+T_distribution*S/pow(numMeasurement, 0.5)
    print("***************************************************\n")
    print("RESULT:",rangeBelow, " -> ",rangeAbove)
    print("RESULT:",round(rangeBelow, 2), " -> ",round(rangeAbove, 2))
    print("Unbiased Variance =", round(S*S, 2), S*S)
    print("Unbiased Standard Deviation =", round(S, 2), S)
    print("\n***************************************************")

def __MAIN__():
    #listMeasurement = [80,95,60,70,100]
    listMeasurement = []
    if(len(listMeasurement)==0):
        numMeasurement = int(input("numMeasurement:"))
        for i in range(0,numMeasurement):
            a = float(input("Result measurement number "+str(i)+": "))
            listMeasurement.append(a)
    standardDeviation = float(input("standardDeviation (-1 if unknown):"))
    if( standardDeviation>=0 ):
        knownSD(listMeasurement, standardDeviation)
    else:
        unknownSD(listMeasurement)

__MAIN__()







