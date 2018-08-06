def result(p1,p2):
	if(p1>p2): return "win"
	if(p2>p1): return "lose"
	return "draw"

print(result(1,2))
print(result(2,1))
print(result(2,2))