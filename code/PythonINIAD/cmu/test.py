def specificDigitCount(n,digit):
    count = 0
    answer = 0
    n = abs(n)
    while (n>0):
        if n%10 == digit:
            count += 1
            if count>answer:
                answer = count
        else:
            count == 0
        n //= 10
    return answer

def longestDigitRun(n):
    bestCount = 0
    bestDigit = 0
    for currDigit in range(10):
        currCount = specificDigitCount(n,currDigit)
        if (currCount>bestCount):
            bestCount = currCount
            bestDigit = currDigit
    return bestDigit

print(longestDigitRun(-677886))