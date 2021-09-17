import re

def takeNumber(s):
	return float(s[0:len(s)-8])

def yen(s):
	repList = re.findall("[0-9]*\.*[0-9]+ dollars", s)
	for rep in repList:
		reRep = str(takeNumber(rep)*110.8)+" yens"
		s = s.replace(rep, reRep)
	return s

print(yen("When I ate ramen in New York, it costed 17 dollars"))
print(yen("When I ate ramen in New York, it costed 17 dollars, 3131.12312 dollars 2313.12312 dollars 21312 213 dollars "))
