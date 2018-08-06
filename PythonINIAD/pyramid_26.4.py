def pyramid(x):
	print("For ...")
	for i in range(1,x+1): #i will run from 1->x
		flo = " "*(x-i)+"#"*i*2
		print(flo, "there are", x-i, "spaces here!")

	cnt = 1 #counting variant
	print("\n\nWhile ...")
	while(cnt<=x):
		flo = " "*(x-cnt)+"#"*cnt*2
		cnt += 1
		print(flo, "there are", x-cnt, "spaces here!")

pyramid(10)