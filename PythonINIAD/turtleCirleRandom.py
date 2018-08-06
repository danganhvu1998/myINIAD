import turtle
import random

def randMove(kame):
	arr = [90,180,270,360]
	kame.left(random.choice(arr))
	kame.forward(10)

kame = turtle.Turtle()
kame.shape('turtle')
# create the circle and then back to the center 
kame.right(90)
kame.penup()
kame.forward(150)
kame.left(90)
kame.pendown()
kame.circle(150)
kame.penup()
kame.home()
kame.pendown()
#run randomdly and make sure it not go out the circle
while(1):
	randMove(kame)
	if(kame.distance(0,0)>150):
		kame.undo()