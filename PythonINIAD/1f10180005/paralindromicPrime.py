def checkPara(intA):
	a = str(intA)
	n = len(a);
	if(n%2==0): return 0;
	for i in range(0,n//2):
		if(a[i]!=a[n-i-1]): return 0
	return 1

def palin_prime(n):
	result = []
	check = [0]*(n+2)
	for i in range(2,n+1):
		if(check[i]==0) :
			if(checkPara(i)): 
				result.append(i)
			for j in range(i*2,n+1,i):
				check[j]=1;
	return result

print(palin_prime(100000))

