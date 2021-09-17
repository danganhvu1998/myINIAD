#https://paiza.jp/challenges/82/show
mnk = input().split()
currentVoteCount = [0]*105
M = int(mnk[0])
N = int(mnk[1])
K = int(mnk[2])
currentVoteCount[M] = N

def speechOf(candidate):
  global currentVoteCount
  addVoteCount = 0
  for i in range(M+1):
    if(currentVoteCount[i]>0):
      currentVoteCount[i]-=1
      addVoteCount+=1
  currentVoteCount[candidate-1] += addVoteCount

for i in range(K):
  speechOf(int(input()))

maxVote = 0
for i in range(M):
  if(maxVote<currentVoteCount[i]): maxVote=currentVoteCount[i]

for i in range(M):
  if(maxVote==currentVoteCount[i]): print(i+1)

