def time(seconds):
	resutl = ""
	mins = int(seconds/60)
	seconds = seconds%60
	if(mins!=0): resutl = str(mins)+" minutes and ";
	resutl += str(seconds)+" seconds"
	return resutl

print(time(59))
