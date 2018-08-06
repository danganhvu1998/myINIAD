import Tkinter
import turtle
import random

def randMove(kame):
	arr = [90,180,270,360]
	kame.left(random.choice(arr))
	kame.forward(10)

kame = turtle.Turtle()
kame.shape('turtle')
while(1):
	randMove(kame)
input()