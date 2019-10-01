def repeat(xs, n):
    result = []
    for x in xs:
        result+=[x]*n
    return result

print(repeat(['I', 'have', 'a', 'pen'], 3))
print(repeat(['I', 'have', 'a', 'pen'], 0))