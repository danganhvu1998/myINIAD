import random

def mergeSort(numList):
	print("Splitting:", numList)
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
	print("Merging:", numList)
	return numList;

def __main__(n):
	listA = []
	for i in range(0,n):
		listA.append(random.randint(0,1000))
	mergeSort(listA)

while(1):
	__main__(int(input("N = ")))

