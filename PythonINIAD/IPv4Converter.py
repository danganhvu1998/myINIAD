import re

def biToDe(biStr):
    ans=0
    for bit in biStr:
        ans=ans*2+int(bit)
    return ans

def deToBi(deStr):
    ans = ""
    currValue = 128
    deInt = int(deStr)
    for i in range(0,8):
        if(deInt>=currValue):
            ans+="1"
            deInt-=currValue
        else:
            ans+="0"
        currValue /= 2
    return ans


def biAddressToDeAddess(biAddress):
    ans = ""
    biAddressParts = re.findall("[0-9]+", biAddress)
    for biAddressPart in biAddressParts:
        ans+=str(biToDe(biAddressPart))+"."
    ans = ans[0:-1]
    return ans

def deAddressToBiAddess(biAddress):
    ans = ""
    deAddressParts = re.findall("[0-9]+", biAddress)
    for deAddressPart in deAddressParts:
        ans+=str(deToBi(deAddressPart))+"."
    ans = ans[0:-1]
    return ans

def announce(biAddress, text):
    print("*********")
    print(text, biAddress)
    print(text, biAddressToDeAddess(biAddress))
    print("*********")
    print()

def networkAddress(biAddress, networkPart):
    currBit = 0
    ans = ""
    for bit in biAddress:
        if(bit!="."):
            currBit+=1
            if(currBit>networkPart):
                ans+="0"
            else:
                ans+=bit
        else:
            ans+=bit
    announce(ans, "Network Address")

def broadcastAddress(biAddress, networkPart):
    currBit = 0
    ans = ""
    for bit in biAddress:
        if(bit!="."):
            currBit+=1
            if(currBit>networkPart):
                ans+="1"
            else:
                ans+=bit
        else:
            ans+=bit
    announce(ans, "Broadcast Address")

def subnetMaskAddress(biAddress, networkPart):
    currBit = 0
    ans = ""
    for bit in biAddress:
        if(bit!="."):
            currBit+=1
            if(currBit<=networkPart):
                ans+="1"
            else:
                ans+="0"
        else:
            ans+=bit
    announce(ans, "Subnet mask Address")

def __main__():
    IPv4 = input("Input IPv4 Address (In any format is okay):");
    #IPv4 = "128.226.170.3"
    networkPart = -1;
    #Calculate Network Part
    if("/" in IPv4):
        ipAddress = re.findall("(.*)/", IPv4)[0]
        networkPart = int(re.findall("/(.*)", IPv4)[0])
    else:
        ipAddress = IPv4
    #Convert Ip Address to both Bi and De
    if(len(ipAddress)>32):
        ipAddressBi = ipAddress
    else:
        ipAddressBi = deAddressToBiAddess(ipAddress)
    announce(ipAddressBi, "IPv4 Address")
    if(networkPart>=0):
        networkAddress(ipAddressBi, networkPart)
        broadcastAddress(ipAddressBi, networkPart)
        subnetMaskAddress(ipAddressBi, networkPart)
    

__main__()