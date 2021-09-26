import time
import my_sorting_module
import random
import matplotlib.pyplot as plt


def timeCounting(n):
	listA = []
	result = []
	for i in range(0,n):
		listA.append(random.randint(0,1000000))
	# Bubble Sort	
	timeStart = time.time()
	my_sorting_module.normalSort(listA.copy())
	timeEnd = time.time()
	result.append(timeEnd-timeStart)
	# Bubble Sort	
	timeStart = time.time()
	my_sorting_module.quickSort(listA.copy())
	timeEnd = time.time()
	result.append(timeEnd-timeStart)
	# Bubble Sort	
	timeStart = time.time()
	my_sorting_module.mergeSort(listA.copy())
	timeEnd = time.time()
	result.append(timeEnd-timeStart)
	return result

pltTime = []
pltBubble = []
pltQuick = []
pltMerge = []
for i in range(500, 5001, 500):
	result = timeCounting(i)
	pltTime.append(i)
	pltBubble.append(result[0])
	pltQuick.append(result[1])
	pltMerge.append(result[2])

plt.title("SORTING TIME COMPARE")
plt.xlabel("Time")
plt.ylabel("Number of element")
plt.plot(pltTime, pltBubble)
plt.plot(pltTime, pltQuick)
plt.plot(pltTime, pltMerge)
plt.show()


