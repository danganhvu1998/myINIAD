import re

while 1:
	postCode = input('Postal Code:')
	if((len(postCode) == 7) & len(re.findall("[0-9]{7}",postCode)))==1:
		print("Ok")
		break
	else:
		print("Dont mess with me!")