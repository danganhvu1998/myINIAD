score = [
	[120,102,110],
	[132,126,120]
]

for i in range(0,len(score)):
	print("The average of Player", i+1, ":", sum(score[i])/len(score[i]))