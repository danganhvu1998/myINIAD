def funcOne(num):
    return num*2

def funcTwo(num):
    return num*3

def funcThree(num):
    return num*4

N = 100000000
for i in range(0, N):
    if(i<=N/5):
        funcOne(i)
    elif(i<=N/5*2):
        funcTwo(i)
    else:
        funcThree(i)