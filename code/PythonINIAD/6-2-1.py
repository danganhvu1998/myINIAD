import os

os.mkdir(r'C:\User\taro\Documents\example\CS_course')
os.mkdir(r'C:\User\taro\Documents\example\INIAD')
file01 = open(r'C:\User\taro\Documents\example\CS_course\first.txt')
file02 = open(r'C:\User\taro\Documents\example\CS_course\second.txt')
file01.write("")
file02.write("")
file01.close()
file02.close()