from random import * #This is not necessary

computer = ['r', 'p', 's']
win = ['rp','ps','sr'] #computer = r, player = p => player win. ps paper scissors. sr scissors rock

def judge(Str):
	if(Str[0] == Str[1]): return "Fair"
	elif(Str in win): return "Win" #player win
	else: return "Lose" #player lose
		

def play():
	print("Game start!")
	rateWin = 0
	for i in range(0,5):
		playerStep = input("your turn:")
		computerStep = computer[randint(0,2)]
		result = judge(computerStep+playerStep) # def judge: calculate the result
		print("computer move:",computerStep,"And the result of this match:",result)
		if(result=="Win"): rateWin+=1
	print("Your win rate:"+str(rateWin/5*100)+"%")
	input()
	print("\n\n")


while(1):
	play()




