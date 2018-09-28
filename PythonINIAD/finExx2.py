def shorter(a, b):
    if(len(a)>len(b)):
        return b
    return a

print(shorter('Ken', 'Sakamura'))
print(shorter('Ken12312312321', 'Sakamura'))
print(shorter('Ken11', 'Sakamura'))