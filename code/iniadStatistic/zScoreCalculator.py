import numpy as np 

#z point is (value-mean)/SD
x = np.array([6,5,4,9,10,6,7,3])
mean = x.mean()
sd = x.std()
zScore = (x-mean)/sd
tScore = zScore*10+50
print(x)
print(zScore)
print(tScore)
