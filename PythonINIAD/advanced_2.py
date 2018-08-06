import re

def cleanSpace(expr):
	result = ''
	for char in expr:
		if(char!=' '): result+=char
	return result

def calculate(expr):
	result = re.search("(\-*\d+)([-+*])(\-*\d+)", expr)
	a = int(result.group(1))
	operator = str(result.group(2))
	b = int(result.group(3))
	if(operator == '+'): return str(a+b)
	if(operator == '-'): return str(a-b)
	return str(a*b)

def noBracesCals(expr):
	while('*' in expr):
		needCals = re.findall('[^0-9](\-*[0-9]+\*\-*[0-9]+)', expr)
		for needCal in needCals:
			expr = expr.replace(needCal, calculate(needCal))
			#print("noBra", expr)

		needCals = re.findall('^(\-*[0-9]+\*\-*[0-9]+)', expr)
		for needCal in needCals:
			expr = expr.replace(needCal, calculate(needCal))
			#print("noBra", expr)

	while re.findall("[0-9][\-\+]", expr):
		needCals = re.findall('^(\-*[0-9]+[\+\-]\-*[0-9]+)', expr)
		for needCal in needCals:
			expr = expr.replace(needCal, calculate(needCal))
			#print("noBra", expr)

	return expr

def calc(expr):
	expr = cleanSpace(expr)
	while("(" in expr):
		braces = re.findall("\(([^\(\))]+)\)",expr)
		#print("calc ", braces)
		for brace in braces:
			expr = expr.replace('('+brace+')', noBracesCals(brace))
			#print("calc ", expr)
	while 1:
		try:
			return int(expr)
		except:
			expr = noBracesCals(expr)

str1 = "-1+2-(3+4+5+6+7+(8*-9*10+30*(-690+5)*12*-1)+11+12+13*14+15)  +6  +7*(10-15)"
print(calc(str1))
print(eval(str1))