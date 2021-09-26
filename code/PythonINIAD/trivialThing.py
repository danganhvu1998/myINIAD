def pyramid(x):
	for i in range(1,x+1):
		flo = " "*(x-i)+"#"*i*2
		print(flo)

pyramid(10)