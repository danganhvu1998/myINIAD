def normalSort(numList):
	n = len(numList)
	for i in range(0, n):
		numMin = numList[i]
		numMinCurr = i
		for j in range(i+1, n):
			if(numList[numMinCurr]>numList[j]): numMinCurr = j
		if(i!=numMinCurr):
			avg = numList[i]
			numList[i] = numList[numMinCurr]
			numList[numMinCurr] = avg
	return numList

def quickSort(numList):
	if(len(numList)<2): return numList
	listLeft = []
	listRight = []
	listAvg = []
	avgValue = numList[(1+len(numList))//2-1]
	for i in numList:
		if(i< avgValue): listLeft.append(i)
		elif(i>avgValue): listRight.append(i)
		else: 
			listAvg.append(i)
	listLeft = quickSort(listLeft)
	listRight = quickSort(listRight)
	numList = listLeft+listAvg+listRight
	return numList

def mergeSort(numList):
	n = len(numList)
	ll = []
	rr = []
	if(n==1): return numList;
	for i in range(0,n//2):
		ll.append(numList[i])
	for i in range(n//2, n):
		rr.append(numList[i])
	ll = mergeSort(ll)
	rr = mergeSort(rr)
	numList = []
	llPos = 0
	rrPos = 0
	llLen = n//2
	rrLen = n-n//2
	for i in range(0,n):
		if(llPos==llLen):
			numList.append(rr[rrPos])
			rrPos+=1
		elif(rrPos==rrLen):
			numList.append(ll[llPos])
			llPos+=1
		elif(ll[llPos]<rr[rrPos]):
			numList.append(ll[llPos])
			llPos+=1
		else:
			numList.append(rr[rrPos])
			rrPos+=1
	return numList;
