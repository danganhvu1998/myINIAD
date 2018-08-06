import re

def toMinus(str):
	result = re.search("(\d\d?):(\d\d?)$",str)
	#print(result.group(1),result.group(2))
	#print(int(result.group(1))*60+int(result.group(2)))
	return int(result.group(1))*60+int(result.group(2))

def time_diff(str1, str2):
	return abs(toMinus(str1)-toMinus(str2))

print(time_diff('23:15', '2:50'))
#toMinus("23:15")
#toMinus("02:50")