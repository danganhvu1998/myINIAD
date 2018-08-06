def sevenNotFive():
	result = []
	for i in range(105, 201, 7):
		print(i)
		if(i%5==0): continue
		result.append(i)
	return result

result = sevenNotFive()
for i in result:
	print(str(i)+"-", end="")