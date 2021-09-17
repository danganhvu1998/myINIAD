def calculateMeanAndStandardDeviation(listQuantity, listMean, listSD):
    N = len(listQuantity)
    S2 = 0
    Sum = 0
    TotalQuantity = 0
    for i in range(0, N):
        Sum += listQuantity[i]*listMean[i]
        TotalQuantity += listQuantity[i]
    Mean = Sum/TotalQuantity

    for i in range(0, N):
        S2 += listQuantity[i]*(listSD[i]*listSD[i]+pow(listMean[i]-Mean, 2))
    S2/=TotalQuantity
    standardDeviation = pow(S2, 0.5)
    print("Final Mean =", Mean, round(Mean, 2))
    print("Final Standard Deviation =", standardDeviation, round(standardDeviation, 2))

def __MAIN__():
    numGroup = int(input("How's many fucking groups? "))
    listMean = []
    listSD = []
    listQuantity = []
    for i in range(0, numGroup):
        print("In group", i+1,"...")
        quantity = int(input("    Quantity = "))
        mean = float(input("    Mean = "))
        standardDeviation = float(input("    Standard Deviation = "))
        listQuantity.append(quantity)
        listMean.append(mean)
        listSD.append(standardDeviation)
    calculateMeanAndStandardDeviation(listQuantity, listMean, listSD)

__MAIN__()
