tyMap = []

def view():
	global tyMap
	for line in tyMap:
		for char in line:
			if(char==0):
				print(" ", end='')
			else:
				print("#", end='')
		print()

def gen(a, b):
	global tyMap
	line = []
	tyMap = []
	for i in range(0,b):
		line.append(0)
	for i in range(0,a):
		tyMap.append(line+[])

def tick(curr, d):
	global tyMap
	direc = [[0,1],[1,0],[0,-1],[-1,0]]
	curr = [ curr[0]+direc[d][0], curr[1]+direc[d][1] ]
	#print(curr)
	try:
		tyMap[int(curr[0])][int(curr[1])]=1
	except:
		print("Out")
	#view()
	return curr

def typhoon(n):
	global tyMap
	#tyMap init = blank
	gen(n+2, n+2)
	#calculate typhoon center
	y = (n-n%4)/2
	x = y
	if(n%4==0): x-=2
	#d: typhoon direct, curr: current point need to tick
	curr=[x,y];
	tyMap[int(curr[0])][int(curr[1])] = 1
	d = 0
	#view()
	for i in range (0,n):
		#t: number of times go with direct d
		t = i-i%2+2
		if(i==n-1): t-=2
		for y in range (0,t):
			curr = tick(curr, d)
		d = (d+1)%4
	view()

while 1:typhoon(int(input()))

