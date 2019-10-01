def is_prime(x):
	xx = int(x**0.5+2) # xx = sqrt(x)+2
	for i in range(2,xx): #checking form 2 to xx-1
		if(x%i==0):
			return False
	return True

print(is_prime(7))
print(is_prime(8))
print(is_prime(9))
print(is_prime(11))


137 