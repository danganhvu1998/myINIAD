listA = [[1,2], [2,3], [4,1], [-10,100]]

def var1(s):
	return s[0]

def var2(s):
	return s[1]

print(sorted(listA, key = var1, reverse=True))
print(sorted(listA, key = var1, reverse=False))
print("\n\n\n\n")
print(sorted(listA, key = var2, reverse=True))
print(sorted(listA, key = var2, reverse=False))
