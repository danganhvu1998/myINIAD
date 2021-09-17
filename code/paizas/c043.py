#https://paiza.jp/challenges/196/show
N = int(input())
nums = []
numCount = [0]*10005
numCountList = []
strListNumber = input().split()
for strNumber in strListNumber:
  numCount[ int(strNumber) ] += 1
for i in range(10005):
  if(numCount[i]>0): numCountList.append( (numCount[i], i) )
numCountList.sort()
resStr = ""
for numCounted in numCountList:
  #print(numCounted[0], numCountList[-1][0])
  if(numCounted[0] == numCountList[-1][0]): resStr = resStr+str(numCounted[1])+" "
print(resStr[0:-1])

