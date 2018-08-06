import pulp
pr = pulp.LpProblem("Farm mgnt.problem", pulp.LpMaximize)
x = pulp.LpVariable("x", lowBound=0)
y = pulp.LpVariable("y", lowBound=0)
#all worker will grow A, because need little time but more profit
pr += 4*x+y <= 36
pr += 0.2*x+0.1*y <= 2
pr += 30*x+10*y
pr.solve()
print(x.value(), y.value())