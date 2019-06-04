# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")
import string

def overflowCheck(currArray):
    maxValue = 1048575 #2^20-1
    #print("WHAT", currArray)
    N = min(len(currArray), 5)
    if(N==1):
        value = currArray[0]
        #print(currArray, value > maxValue, value - maxValue, value, maxValue)
        if(value < 0): return 0
        if(value > maxValue): return 0
    for i in range(1, N):
        value = currArray[-i]
        #print(currArray, value > maxValue, value - maxValue, value, maxValue)
        if(value < 0): return 0
        if(value > maxValue): return 0
    return currArray

def dup(currArray):
    if(len(currArray)<1):
        return 0
    currArray.append(currArray[-1])
    return overflowCheck(currArray)

def pop(currArray):
    if(len(currArray)<1):
        return 0
    currArray = currArray[:-1]
    return overflowCheck(currArray)

def plus(currArray):
    if(len(currArray)<2):
        return 0
    addValue = currArray[-1]+currArray[-2]
    currArray = currArray[:-2]
    currArray.append(addValue)
    return overflowCheck(currArray)

def minus(currArray):
    if(len(currArray)<2):
        return 0
    addValue = currArray[-1]-currArray[-2]
    currArray = currArray[:-2]
    currArray.append(addValue)
    return overflowCheck(currArray)

def addNum(currArray, strNum):
    intNum = int(strNum)
    currArray.append(intNum)
    return overflowCheck(currArray)

def queryProcesser(currArray, query):
    if(len(query)==0): return 0
    if(query == "DUP"):
        return dup(currArray);
    elif(query == "POP"):
        return pop(currArray);
    elif(query == "+"):
        return plus(currArray);
    elif(query == "-"):
        return minus(currArray);
    else:
        return addNum(currArray, query);
    return 0

def solution(S):
    arr = []
    S = S.upper()
    queries = S.split(" ")
    for query in queries:
        result = queryProcesser(arr, query)
        #print(query, arr)
        if(result == 0):
            return -1
        arr = result
    if(len(arr)<1): return -1
    return arr[-1]
    #print(queries)

print(solution("104857 2 + DUP +"))