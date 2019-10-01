import re

def ishtml(s):
    htmlTags = re.findall(r"<[^<>]+>", s)
    if(len(htmlTags)):
        return True
    return False

print(ishtml('<p>We are <b>INIAD</b>!</p>'))
print(ishtml('Let us assume: x < 567.8'))
print(ishtml('But not: x >= 1.234'))
print(ishtml('<>><<>>><a>'))
print(ishtml('conmaxauxi'))
print(ishtml('conmaxauxi<>'))
print(ishtml('conmaxauxi< >'))
