import random

tryCount = 10000000
alpha = 1
contentCount = 100
cacheSize = 10

def popularity(k, s = alpha, N = contentCount):
    totalPopularity = 0.0
    for i in range(N):
        totalPopularity += 1 / (i+1) ** s
    return ( 1 / k ** s ) / totalPopularity

popuparityList = []
for i in range( contentCount ):
    popuparityList.append( popularity(i+1) )

contentRequireList = []
for i in range( contentCount ):
    contentRequireList += [i+1] * int( popuparityList[i] * tryCount )
random.shuffle( contentRequireList )
tryCount = len( contentRequireList )
cacheHit = 0
for i in range(tryCount):
    currCacheSize = 0
    currPosCheck = i - 1
    while( currPosCheck >= 0 ):
        if( contentRequireList[currPosCheck] == contentRequireList[i] ):
            cacheHit += 1
            break
        currCacheSize += 1
        for z in range(currPosCheck+1, i):
            if( contentRequireList[currPosCheck] == contentRequireList[z] ):
                currCacheSize -= 1
                break
        if( currCacheSize ==10 ): break
        currPosCheck -= 1

# print( contentRequireList )
print( cacheHit / tryCount, cacheHit, tryCount )