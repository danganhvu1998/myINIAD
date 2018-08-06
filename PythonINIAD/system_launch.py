import os #os = ubuntu

while 1:
	cmd = input("~")
	if(cmd=='calc'): 
		os.system("gnome-calculator")
	elif (cmd=='moocs'): 
		os.system("firefox https://moocs.iniad.org/courses")
	elif (cmd=='current'):
		os.system("firefox ./")