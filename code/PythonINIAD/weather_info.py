def changeToC(temp, unit):
	if(unit=='F'):
		return (temp-32)/1.8
	elif(unit=='K'):
		return temp-273
	else:
		return temp

def judge(DI):
	if(DI<21):
		return "No discomfort"
	elif(DI<24):
		return "Less than half of the population feels discomfort"
	elif(DI<27):
		return "Over half of the population fells discomfort"
	elif(DI<29):
		return "Most of the population fells discomfort"
	elif(DI<32):
		return "Everybody fells discomfort"
	else:
		return "State of medical emergency"

def weather_info(temp, unit, hum):
	temp = changeToC(temp, unit)
	DI = temp-0.55*(1-0.01*hum)*(temp-14.5)
	print("Today/'s DI is", DI)
	print(judge(DI))

weather_info(80,"F",70)