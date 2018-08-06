def permutation(n, k):
	result = 1;
	for i in range(0,k):
		result*= n-i
	return result

print(permutation(10,3))