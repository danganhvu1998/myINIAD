def bind2nd(f, a):
    def g(x):
        return f(x, a)
    return g

def add(x, y):
    return x + y

def sub(x, y):
    return x - y

increment = bind2nd(add, 1)
decrement = bind2nd(sub, 1)

five = 5
print("increment(five) =", increment(five))
print("decrement(five) =", decrement(five))
