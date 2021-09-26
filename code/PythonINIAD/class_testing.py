class Lecture:
	def __init__(self, name, teacher, credits):
		self.name = name
		self.teacher = teacher
		self.credits = credits

philo = Lecture('a', 'b', 5)
haha = Lecture('a', 'b', 3)
print(philo.credits+haha.credits)