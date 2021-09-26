class Rectangle:
    def __init__(self, w, h):
        self.width = w
        self.height = h

    def area(self):
        return self.width * self.height

r1 = Rectangle(10, 20)
r2 = Rectangle(30, 40)

print("r1:", r1.width, "x", r1.height)
print("Area of r2:", r2.area())
