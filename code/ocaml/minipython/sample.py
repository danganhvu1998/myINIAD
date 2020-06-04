
def fib(n) :
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n-1) + fib(n-2)

i = 0
while i != 31:
    print("fib", i, "=", fib(i))
    i = i + 1

print("finished")
