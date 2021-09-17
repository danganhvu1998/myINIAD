import turtle

def run(kame, level, dist): #do Extra3
	if(level == 0): return 0
	elif (level == 1): kame.forward(dist)
	else:
		run(kame, level-1, dist/3)
		kame.right(60)
		run(kame, level-1, dist/3)
		kame.left(120)
		run(kame, level-1, dist/3)
		kame.right(60)
		run(kame, level-1, dist/3)

def tri(kame, level, dist): #do Extra3 3 times
	run(kame, level, dist)
	kame.left(120)
	run(kame, level, dist)
	kame.left(120)
	run(kame, level, dist)

kame = turtle.Turtle()
kame.penup()
kame.backward(500)
kame.right(90)
kame.forward(200)
kame.left(90)
kame.pendown()
kame.shape('turtle')
tri(kame, 6, 243)
input()
