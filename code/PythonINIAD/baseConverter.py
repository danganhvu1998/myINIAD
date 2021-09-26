hexaNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

def decimalToBinary(num):
    result = ""
    while num>0:
        nextCharNum = str(num%2)
        result = nextCharNum + result
        num = int(num/2)
    while len(result)<4:
        result = "0"+result
    return result

def oneCharHexaToBinary(hexaChar):
    for i in range(0, 16):
        if(hexaChar == hexaNum[i]):
            return decimalToBinary(i)

def hexaToBinary(hexaStr):
    result = ""
    for hexaChar in hexaStr:
        nextChar = oneCharHexaToBinary(hexaChar)
        result = result + nextChar
        print("Hexa " + hexaChar + " is " + nextChar + " in binary")
    print(result)

def decimalToHexa(num):
    result = ""
    while num>0:
        nextCharNum = num%16
        result = hexaNum[nextCharNum] + result
        print(str(num) + " / 16 = " + str(int(num/16)) + " remain " + str(nextCharNum))
        num = int(num/16)
    print(result)
    return 0

def binaryToDecimal(binaryStr):
    result = 0
    for binaryChar in binaryStr:
        result = result*2+int(binaryChar)
    print("Binary" ,binaryStr, "is", result, "in octal")
    return str(result)

def binaryToOctal(binaryStr):
    while len(binaryStr)%3!=0:
        binaryStr = "0"+binaryStr
    print(binaryStr)
    nextThreeBinary = ""
    result = ""
    for binaryChar in binaryStr:
        nextThreeBinary = nextThreeBinary + binaryChar
        if len(nextThreeBinary)==3:
            result = result+binaryToDecimal(nextThreeBinary)
            nextThreeBinary = ""
    print(result)

    
    

decimalToHexa(10180005)
hexaToBinary("9B55A5")
binaryToOctal("100110110101010110100101")
