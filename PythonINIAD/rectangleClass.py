class Rectangle:
	def __init__(self, width, height):
		self.width = width
		self.height = height

	def area(self):
		return self.width*self.height

r = Rectangle(5,4)
print(r.width, r.height, r.area())