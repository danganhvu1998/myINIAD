
def fib(n) :
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n-1) + fib(n-2)

n = 0
while n != 31:
    print("fib", n, "=", fib(n))
    n = n + 1

print("finished")
