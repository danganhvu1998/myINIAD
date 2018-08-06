def isLeapYear(intYear):
	if(intYear%4!=0):return 0
	if(intYear%100==0 and intYear%400!=0): return 0
	return 1

def judge(intYear):
	if(isLeapYear(intYear)):
		print(str(intYear)+": a leap year")
	else:
		print(str(intYear)+": not a leap year")

for year in range(1900,2011):
	judge(year)