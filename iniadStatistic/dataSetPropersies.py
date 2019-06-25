import numpy as np

def listMedian(listNum):
    print("\nLIST NUMBER:", listNum)
    N = len(listNum)
    if(N%2==0):
        return((listNum[int(N/2)]+listNum[int(N/2-1)])/2.0)
    else:
        return listNum[int(N/2)]

listNum = [8,9,10,11,12,13,14,15,16,17]
listNum.sort()
listNumber = np.array(listNum)
print("Mean:", listNumber.mean())
print("Standard Deviation:", listNumber.std())
print("Variance:", listNumber.std()*listNumber.std())
print("Median:", listMedian(listNum))
print("1st quartile:", listMedian(listNum[0:int(len(listNum)/2)]))
print("3st quartile:", listMedian(listNum[int(len(listNum)/2)+int(len(listNum))%2:]))
