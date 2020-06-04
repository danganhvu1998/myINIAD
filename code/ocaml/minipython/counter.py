def counter():
    cnt = 0
    def next():
        nonlocal cnt
        cnt = cnt + 1
        return cnt
    return next

c = counter()

i = 0
while i != 11:
    print(c())
    i += 1
