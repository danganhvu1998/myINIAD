def abbrev(text):
	result = ''
	outStr = "ueoai"
	for char in text:
		if char not in outStr:
			result+=char
	return result

print(abbrev("toyo university is wonderful"))