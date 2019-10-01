import numpy as np 

variance = float(input("Variance or square of Standard Deviation: "))
standardDeviation = np.sqrt(variance)
kSD = float(input("K x SD: "))
k = kSD / standardDeviation;
print("===== RESULT =====")
print("P(|X-E(X)|>={}) <= {}".format(kSD, 1.0/k/k))
print("P(|X-E(X)|<={}) >= {}".format(kSD, 1-1.0/k/k))
