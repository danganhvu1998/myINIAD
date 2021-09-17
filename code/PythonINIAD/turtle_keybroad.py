import turtle
import re

def run(kame, cmd):
	if("forward" in cmd):
		cmdStr = 'F'
	elif("backward" in cmd):
		cmdStr = 'B'
	elif("left" in cmd):
		cmdStr = 'L'
	elif("right" in cmd):
		cmdStr = 'R'
	elif("circle" in cmd):
		cmdStr = 'C'
	else:
		print("Invalid format cmd!")
		return 0
	cmdNum = int(re.findall('[0-9]+', cmd)[0])
	if( cmdStr == 'F' ): kame.forward(cmdNum)
	elif ( cmdStr == 'B' ): kame.backward(cmdNum)
	elif ( cmdStr == 'L' ): kame.left(cmdNum)
	elif ( cmdStr == 'C' ): kame.circle(cmdNum)
	else: kame.right(cmdNum)

kame = turtle.Turtle()
kame.shape('turtle')
while(1):
	cmd = input().lower()
	if("exit" in cmd): break
	run(kame, cmd)
