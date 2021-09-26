import re

def get_hour(time):
	return int(re.findall("([0-9])*:", time)[0])

print(get_hour("09:12"))