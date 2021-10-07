import numpy as np

def fold_with_overlap(arr, width=4, overlap=2):
    res = None
    length = len(arr)
    curr = 0
    while curr + width <= length:
        if curr != 0:
            res = np.append(res, [arr[curr:curr+width]], axis=0)
        else:
            res = np.array([arr[curr:curr+width]])
        curr = curr + width - overlap
    return res


array = np.array( range(0,10) )
print( fold_with_overlap(array) )
