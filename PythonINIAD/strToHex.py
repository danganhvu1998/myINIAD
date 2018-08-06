def takeNumber(s):
	result = ""
	result+=result+s[2:len(s)]
	if(len(result)==1):
		result = "0"+result;
	return result;

def strToHex(s):
	result = ""
	for char in s:
		result+=takeNumber(hex(ord(char)))+' '
	return result

print(strToHex("Toyo University"))
print(strToHex("This is a pen"))