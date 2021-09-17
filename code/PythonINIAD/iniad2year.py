import re

def iniad2year(s):
	return int(("201"+re.findall("s1F101([0-9])[0-9]{5}@iniad.org",s)[0]))

print(iniad2year("s1F101800000@iniad.org"))
