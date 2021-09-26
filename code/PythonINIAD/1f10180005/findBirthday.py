fhand = open("pi_million_digits.txt",'r');
pi = ''
for line in fhand:
	pi+=line.strip()
while(1):
	bthday = input("What is your birthday? (mmddyy): ");
	if(bthday in pi):
		print("Pi has your birthday")
	else:
		print("Pi doesn't have your birthday")
