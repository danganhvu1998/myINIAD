mydict = dict()

def var1(s):
	return s[0]
def var2(s):
	return s[1]

mydict[0]=1
mydict[1]=3
mydict[2]=2
mydict[3]=0

print(mydict.items())
print(dict(sorted( mydict.items(), key = var1 )))
print(dict(sorted( mydict.items(), key = var2 )))