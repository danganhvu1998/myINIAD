def omit_t(Str):
	Ans = ""
	for char in Str:
		if(char=='t'): continue
		Ans += char
	return Ans

while(1):
	Str = input("String = ")	
	print(omit_t(Str))