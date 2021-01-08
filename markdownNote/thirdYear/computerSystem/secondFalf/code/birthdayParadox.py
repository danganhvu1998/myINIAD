res = 1.0
for i in range(23):
    res *= 1.0-i/365.0
print(1 - res)
