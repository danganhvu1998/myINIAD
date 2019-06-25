import numpy as np
x=np.array([847.1, 866.8, 863.4, 876.8, 881.9])
y=np.array([5013, 5095, 5090, 5177, 5228])
print(np.corrcoef(x, y)[0, 1])