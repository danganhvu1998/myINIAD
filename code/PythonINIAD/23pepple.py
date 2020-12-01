res = 1.0

for i in range(22):
    res *= 1.0-1.0/365.0

print(1 - res)
