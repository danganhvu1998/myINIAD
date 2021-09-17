def factorial(n):
	resutl = 1
	for i in range(0,n):
		resutl*=i+1
	return resutl

def combination(n, k):
	return int(factorial(n)/( factorial(k)*factorial(n-k) ))

print(combination(10,3))
print(combination(4,2))