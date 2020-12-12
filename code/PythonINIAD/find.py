import hashlib

n = 7
target =  "0"*(n-1) + "1" + "0"*(64-n)
nonce = 0
while True:
    y = "I am Satoshi Nakamoto" + str(nonce)
    if int(hashlib.sha256(y.encode()).hexdigest(), 16) < int(target, 16):
        print(nonce)
        print(target)
        print(hashlib.sha256(y.encode()).hexdigest())
        break
    nonce += 2004