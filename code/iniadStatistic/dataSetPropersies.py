import numpy as np

def listMedian(listNum):
    print("\nLIST NUMBER:", listNum)
    N = len(listNum)
    if(N%2==0):
        return((listNum[int(N/2)]+listNum[int(N/2-1)])/2.0)
    else:
        return listNum[int(N/2)]

#listNum = [13, 5, 9, 1, 17, 9]
listNum = [7, 9, 10, 8, 9, 12]
#listNum = [14, 8, 27, 16, 10]
listNum.sort()
listNumber = np.array(listNum)
print("Mean:", listNumber.mean())
print("Sum:", listNumber.sum())
print("Standard Deviation:", listNumber.std())
print("Variance:", listNumber.std()*listNumber.std())
print("Median:", listMedian(listNum))
print("1st quartile:", listMedian(listNum[0:int(len(listNum)/2)]))
print("3st quartile:", listMedian(listNum[int(len(listNum)/2)+int(len(listNum))%2:]))
