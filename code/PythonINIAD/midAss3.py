def maxlen( strings ):
	result = 0;
	for string in strings:
		result = max( result, len(string) )
	return result

print(maxlen(['afdasdfasdI', 'have', 'an', 'apple']))