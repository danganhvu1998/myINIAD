from itertools import combinations
import math 
# average number of arrival calls per unit time (calls/s)
Lambda = float(input("Average number of arrival calls per unit time: "))
# average line holding time (s) (1/u)
average_line_holding_time = float(input("Average line holding time: "))
# number of lines
c = int(input("Number of lines: "))

def Sum(p, c):
    s = 0
    for i in range(0, c+1):
        s += p**i/math.factorial(i)
    return s

u = 1/float(average_line_holding_time)
p = float(Lambda) /float(u)
print("p: " + str(p))

# Erlang B formula
# Call loss rate
B = ((p**c)/math.factorial(c)) / Sum(p, c)

print("B: " + str(B))
