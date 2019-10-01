def takeNumber(s):
	result = ""
	result+=result+s[2:len(s)]
	if(len(result)==1):
		result = "0"+result;
	return result;


print(takeNumber("0x1f"))
print(takeNumber("0x5"))
