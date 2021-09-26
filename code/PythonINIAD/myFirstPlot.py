import matplotlib.pyplot as plt

x1_value = [1,2,4,5]
y1_value = [4,9,16,25]
x2_value = [1,2,3,4,5]
y2_value = [1,4,9,16,25]
x3_value = [1,2,4,5,100]
y3_value = [4,9,16,25,40]
plt.title("My First Plot")
plt.xlabel("Time")
plt.ylabel("Distance")

plt.plot(x1_value, y1_value)
plt.plot(x2_value, y2_value)
plt.plot(x3_value, y3_value)
plt.show()