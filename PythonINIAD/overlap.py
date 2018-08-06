def overlap(xs, ys):
	result = []
	for num in xs:
		if(num in ys):
			result.append(num)
	return result

print(overlap([1,2,3,4,5,6,7,8,9,10],[1,3,5,7,9,11,13,15,17,19]))