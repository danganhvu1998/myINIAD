class Student:
	def __init__(self, id, gakunen, first, family):
		self.student_id = id  # Student ID
		self.first_name = first  # Given Name
		self.family_name = family  # Family Name
		self._gakunen = gakunen # Grade

	def full_name(self):
		return self.first_name+ " " + self.family_name


taro = Student(1234, 3, "Taro", "Yamada")
hanako = Student(1301, 3, "hanako", "Sato")