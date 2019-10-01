import random

for i in range(0, 100):
    strNum = ""
    for j in range(0,3):
        strNum += str(random.randint(0,10))+";"
    a = random.randint(50,100)
    b = random.randint(a-1, a+1)
    strNum += str(a)+";"+str(b)
    print(strNum);