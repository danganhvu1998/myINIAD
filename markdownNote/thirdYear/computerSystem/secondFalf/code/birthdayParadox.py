res = 1.0
for i in range(4):
    res *= 1.0-i/64.0
print(1 - res)
