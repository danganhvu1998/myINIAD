A = []
B = []
C = []

def printGroup(grp):
	for i in range(1,len(grp)+1):
		print(str(i)+". "+grp[i-1])

def putInGrup(name):
	if(len(name)==0): return 0
	cnt = 0
	for char in name:
		if(char!=' '): cnt+=1
	if(cnt < 7):
		A.append(name)
	elif(cnt < 10):
		B.append(name)
	else:
		C.append(name)

def takeName(names):
	names = names+','
	name = ""
	for char in names:
		if(char!=','):
			name+=char
		else:
			putInGrup(name)
			name = ""

takeName("Nguyen Ngoc, Nguyen Tung, Pham Oanh, Dang Vu, Setiwan Hubertus, Nguyen Anh, Pham Nam, Piriyathananuku Kittiphot, Tam Xiuyao, Le Vu, Cao Vuong, Abdul Adhim, Do Duong, Mai Dung")
print("team A has:")
printGroup(A)
print("team B has:")
printGroup(B)
print("team C has:")
printGroup(C)