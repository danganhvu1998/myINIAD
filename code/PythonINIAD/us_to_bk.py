import re

def us_to_bk(str):
	result = re.search("^([0-9]+)/([0-9]+)/([0-9]{4})$",str)
	return result.group(2)+"/"+result.group(1)+"/"+result.group(3)

print(us_to_bk('9/4/2013'))