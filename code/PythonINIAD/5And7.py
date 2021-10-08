import numpy as np

a = np.array( [ 1, 2, 3] )
print( a.shape )
print( a )
a = a.reshape( -1, 1 ) 
print( a.shape )
print( a )
b = np.array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] )
print( b.shape )
print( b )
b = b.reshape( -1, 3, 1 ) 
print( b.shape )
print( b )