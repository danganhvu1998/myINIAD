def stringToBits(str):
    res = []
    for char in str:
        if('a' <= char and char <= 'z'):
            res.append(ord(char) - ord('a'))
        else:
            res.append(ord(char) - ord('A') + 26)
    return res


def bitsToString(bits):
    res = ''
    for bit in bits:
        if(bit < 26):
            res = res + chr(bit + ord('a'))
        else:
            res = res + chr(bit - 26 + ord('A'))
    return res


def decrypt(encryptedString, firstKey):
    encryptedBits = stringToBits(encryptedString)
    decryptedBits = []
    for i in range(len(encryptedBits)):
        decryptedBits.append(encryptedBits[i] ^ ((firstKey+i) % 32))
    decryptedString = bitsToString(decryptedBits)
    print(encryptedString, firstKey, decryptedString)
    return decryptedString


# bitsTest = stringToBits('ABCDEFabcdef')
# stringTest = bitsToString(bitsTest)

for firstKey in range(32):
    decrypt('eaonj', firstKey)
