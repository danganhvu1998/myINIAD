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

def cleanBrace(expr):
	braces = re.findall('\(\-*[0-9]*\)', expr)
	expr.replace("()","")
	for brace in braces:
		expr = expr.replace(brace, re.findall("\-*[0-9]+", brace)[0])
		print("clean",expr)
	return expr

def preRun(expr):
	noOpe = ['+-','--','+(-','-(-']
	yesOpe = ['-','+','-(','+(']
	l = len(noOpe)
	for i in range(0, l):
		expr = expr.replace(noOpe[i], yesOpe[i])
		print("preRu", expr)
	return expr

def mainCalculation(expr):
	expr = preRun(expr)
	cals = re.findall("[0-9]+[\*][0-9]+", expr)
	for cal in cals:
		expr = expr.replace(cal, calculate(cal))
		print("main ",expr)
	expr = cleanBrace(expr)

	expr = preRun(expr)
	cals = re.findall("[0-9]+[\+\-][0-9]+", expr)
	for cal in cals:
		expr = expr.replace(cal, calculate(cal))
		print("main ",expr)
	expr = cleanBrace(expr)

	return expr

def calc(expr):
	expr = cleanSpace(expr)
	while 1:
		try:
			return int(expr)
		except:
			expr = mainCalculation(expr)

print(calc("1+2-(3+4+5+6+7+8+9+10+11+12+13+14+15)+6+7*(10-15)"))

