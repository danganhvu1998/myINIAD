def longer(xs, n):
    result = []
    for x in xs:
        if(len(x)>=n):
            result.append(x)
    return result

print(longer(['I', 'have', 'a', 'pen'], 3));