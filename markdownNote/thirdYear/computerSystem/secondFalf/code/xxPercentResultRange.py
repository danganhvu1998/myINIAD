import scipy.stats as st

def unknownSD(listMeasurement, confidentLevel = 0.95):
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
    T_distribution = abs(st.t.ppf((1 - confidentLevel)/2, numMeasurement-1)) #95%

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
    listMeasurement = [14.54, 20.52, 13.08, 12.41, 17.64, 15.53, 16.04, 14.41]
    standardDeviation = -1
    unknownSD(listMeasurement, 0.9)

__MAIN__()