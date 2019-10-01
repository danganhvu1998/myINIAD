import re


def rewrite(text):
	reList = re.findall("\$[0-9]+", text)
	#print(reList)
	for reStr in reList:
		#print(reStr[1:])
		text = text.replace(reStr, reStr[1:]+" dollars")
	return text;

print(rewrite("Bitcoin has become below the lowest price of $9000 this week and are now $9000 per 1BTC"))