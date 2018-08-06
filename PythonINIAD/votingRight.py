def voting_right(age, year):
	if(year<2016 and age<20): return False
	elif (year>2015 and age<18): return False
	else: return True

while(1):
	age = int(input("age:"))
	year = int(input("year:"))
	print(voting_right(age,year))