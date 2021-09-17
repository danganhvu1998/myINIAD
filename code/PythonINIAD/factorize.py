def factorize(x):
	result = []
	for i in range(2,x):
		while x%i==0:
			x/=i
			result.append(i)
			if x==1: return result #for running faster. Because when x==1, then no more number will be able to be put into result
	return result

print( factorize(100) )
print( factorize(125) )
print( factorize(48) )
print( factorize(1024) )
