def counter(n):
    count = 0
    while n>0:
        n = n//10
        count +=1
    return count

def isPrime(n):
    if(n<2):
        return False
    for factor in range(2,int(n/2)+1):
        if(n%factor==0):
            return False
    return True

def rotatenumber(n):
    lastnumber = n%10
    newnumber = n//10
    number = 0
    number = lastnumber*10**counter(newnumber) + newnumber
    return number

def isCircularPrime(n):
    for i in range(counter(n)):
        if not isPrime(n):
            return False
        n = rotatenumber(n)
    return True
        
def checkzero(num):
    if num==0:
        return False
    while num>0:
        if(num%10 == 0):
            return False
        num //= 10
    return True

def nthCircularPrime(n):
    found = 0
    guess = 0
    while(found <= n):
        guess += 1
        if(isCircularPrime(guess) and checkzero(guess)):
            found += 1
    return guess

def nthDigitOf(pos, n):
    dig = (n//10**pos)%10
    return dig

def isPalindromicPrime(n):
    if not isPrime(n):
        return False
    digits = counter(n)
    print("Checking ", n)
    for i in range(digits//2):
        print(i, n, nthDigitOf(i, n),nthDigitOf(counter(n)-i,n))
        if nthDigitOf(i, n) != nthDigitOf(counter(n)-i, n):
            return False
    return True

def nthPalindromicPrime(n):
    found = 0
    guess = 0
    while(found <= n):
        guess += 1
        if(isPalindromicPrime(guess)):
            found += 1
    return guess

print(nthPalindromicPrime(20))