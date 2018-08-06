def count_char(line, c):
	ans = 0
	for char in line:
		if(char == c): ans+=1
	return ans

print(count_char('aabbaab','a'))
print(count_char('aabbaab','b'))