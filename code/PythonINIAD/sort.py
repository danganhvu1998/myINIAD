import random
quickSortCompareCount = 0;

def normalSort(numList):
	compareCount = 0;
	n = len(numList)
	for i in range(0, n):
		numMin = numList[i]
		numMinCurr = i
		for j in range(i+1, n):
			compareCount+=1
			#print("Comparison number", compareCount);
			if(numList[numMinCurr]>numList[j]): numMinCurr = j
		if(i!=numMinCurr):
			avg = numList[i]
			numList[i] = numList[numMinCurr]
			numList[numMinCurr] = avg
	return [numList, compareCount]

def quickSort(numList):
	global quickSortCompareCount
	if(len(numList)<2): return numList
	#print(numList)
	listLeft = []
	listRight = []
	listAvg = []
	avgValue = numList[(0+len(numList))//2]
	for i in numList:
		quickSortCompareCount+=1;
		#print("Comparison number", quickSortCompareCount)
		if(i< avgValue): listLeft.append(i)
		elif(i>avgValue): listRight.append(i)
		else: listAvg.append(i)
	#print("==========>>>>>>>NOTSORT",listLeft, listAvg, listRight)
	listLeft = quickSort(listLeft)
	listRight = quickSort(listRight)
	#print("SORTED ",listLeft, listAvg, listRight)
	numList = listLeft+listAvg+listRight
	#print("==========>>>>>>>",numList)
	return [numList, quickSortCompareCount]

listA = []
for i in range(0,10000):
	listA.append(random.randint(0,1000000))
print(normalSort(listA)[1])
quickSortCompareCount = 0
print(quickSort(listA)[1])
