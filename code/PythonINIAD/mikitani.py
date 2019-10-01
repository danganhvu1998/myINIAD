def mikitani(yen):
	strYen = str(yen)
	lenth = len(strYen)
	result = ''
	for i in range (0,lenth):
		if((lenth-i)%3==0): result+=','
		result+=strYen[i]
	return result

def mikitani(yen):
	print ("{:,}".format(yen))

mikitani(1230300400505)