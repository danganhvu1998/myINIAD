def smallNumberToEnglish(num):
	numToEng = ['Jhon Cena!!!!!','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
	numtyToEng = ['Jhon Cena!!!!!', 'Jhon Cena!!!!!', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']	
	
	if(num==0): 
		return ""
	elif(num<20):
		return numToEng[num]
	else:
		secondNum = int(num/10)
		num %= 10
		thirdNum = num
		if(thirdNum!=0):
			return numtyToEng[secondNum]+"-"+numToEng[thirdNum]
		else:
			return numtyToEng[secondNum]

def numberToEnglish(num):
	numToEng = ['Jhon Cena!!!!!','one','two','three','four','five','six','seven','eight','nine']
	firstNum = int(num/100)
	num %= 100
	if(num==0):
		return numToEng[firstNum] + " hundred"
	else:
		return numToEng[firstNum] + " hundred and " + smallNumberToEnglish(num)



while(1):
	x = int(input("what is the number: "))
	print(numberToEnglish(x))