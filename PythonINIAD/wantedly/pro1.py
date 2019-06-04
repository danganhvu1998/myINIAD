# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A):
    # write your code in Python 3.6
    strA = str(A)
    result = ""
    N = len(strA)
    lastStart = -1;
    lastEnd = N
    for i in range(0,N):
        if(i%2==0):
            lastStart= lastStart + 1;
            result = result + strA[lastStart]
        else:
            lastEnd = lastEnd - 1
            result = result + strA[lastEnd]
    return int(result)

    

print(solution(123456789))