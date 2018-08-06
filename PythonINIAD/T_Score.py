import statistics

scores = [97, 83, 64, 29, 59, 28, 84, 72]
uu = statistics.pstdev(scores)
pp = statistics.mean(scores)

def standard_score(x):
	return (50 + 10*(x-pp)/uu)

print(standard_score(97))
