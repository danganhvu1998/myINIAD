import numpy as np

listNum = [13, 5, 9, 1, 17, 9]
# SUM: 54
# MEAN: 9.0
# VARIANCE: 26.666666666666668
# Standard Deviation: 5.163977794943222

# listNum = [7, 9, 10, 8, 9, 12]
# SUM: 55
# MEAN: 9.166666666666666
# VARIANCE: 2.472222222222222
# Standard Deviation: 1.5723301886761005

listNumber = np.array(listNum)
arrMean = listNumber.mean()
sumSquareDeviation = 0
for num in listNumber:
    squareDiff = (num-arrMean)*(num-arrMean)
    sumSquareDeviation += squareDiff
listVariance = sumSquareDeviation / listNumber.size
listStandardDeviation = listVariance ** 0.5
print("SUM:", listNumber.sum())
print("MEAN:", listNumber.sum() / listNumber.size)
print("VARIANCE:", listVariance)
print("STANDARD DEVIATION:", listStandardDeviation)