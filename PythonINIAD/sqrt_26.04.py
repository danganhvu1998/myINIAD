def sqrt(x):
	cnt=10 #number of time that we will run
	ans = x
	while cnt!=0:
		ans = ans-(ans*ans-x)/2/ans; #just follow the formula
		cnt-=1 
		#debug
		print("After run",10-cnt,"times, the value now is:", ans)
		#debug
	return ans
while(1):
	x = float(input("input X = "))
	print(sqrt(x))


