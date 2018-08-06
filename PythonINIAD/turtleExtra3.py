import turtle

def run(kame, level, dist):
	if(level == 0): return 0
	elif (level == 1): kame.forward(dist)
	else:
		run(kame, level-1, dist/3)
		kame.left(60)
		run(kame, level-1, dist/3)
		kame.right(120)
		run(kame, level-1, dist/3)
		kame.left(60)
		run(kame, level-1, dist/3)

kame = turtle.Turtle()
kame.penup()
kame.backward(325)
kame.pendown()
kame.shape('turtle')
run(kame, 5, 729)
input()
