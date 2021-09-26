import statistics

def my_mean_deviation(s):
	return [statistics.mean(s), statistics.pstdev(s)]

print(my_mean_deviation([10,20,30,40]))