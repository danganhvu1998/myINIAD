#import Tkinter
import turtle

def starMove(kame):
	kame.forward(150)
	kame.left(144)

kame = turtle.Turtle()
kame.shape('turtle')
for i in range(0,5):
	starMove(kame)
input()