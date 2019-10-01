def max_cont_char(str, loockingChar):
	curr = 0
	result = 0
	for char in str:
		if( char == loockingChar ): 
			curr += 1
		else:
			curr = 0
		result = max(result, curr)
	return result

print(max_cont_char("bbbaaaaaaaaaaaa","a"))
print(max_cont_char("bbbaaaaaaaaaaaabbbb","b"))