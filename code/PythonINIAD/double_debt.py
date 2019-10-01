def OhBoy(x):
	currentDebt = 1 #current debt
	rate = 1+x/100 #rate of debt 
	yearAns = 0 #current year
	while(currentDebt<2):
		currentDebt = currentDebt*rate
		yearAns+=1
		#debug: fix the bug if had. Usualy, I try to print everything
		#and read the value of the variant to find out where the bug is

		#debug bellow
		print("After", yearAns, "year, current debt is:", currentDebt )
	return yearAns

x = float(input("How many percent per year: "))
print(OhBoy(x)