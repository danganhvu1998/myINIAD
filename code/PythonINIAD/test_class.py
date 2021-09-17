class Person():
    name = ''
    age = ''

    def __init__(self, name, age):
        print('INIT PERSON DUOC GOI')
        self.name = name
        self.age = age
    
    def get_info(self):
        return self.name + " " + str(self.age)
    
    def print_info(self):
        print( self.get_info() )




###################################
# Override Persion ################

class Student( Person ):
    parent = ''
    def __init__(self, name, age, parent):
        print('INIT STUDENT DUOC GOI')
        super().__init__(name, age)
        self.parent = parent
    
    def get_info(self):
        res =  super().get_info()
        res = res + " " + self.parent
        return res

ly = Person("LY", 23)
ly.print_info()
print("----------------------------------------")
ly = Student("LY", 23, 'Ly\'s parent')
ly.print_info()