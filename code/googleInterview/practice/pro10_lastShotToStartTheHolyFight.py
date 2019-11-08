# Given a string with a certain rule: k[string] should be expanded to string k times. 
# So for example, 3[abc] should be expanded to abcabcabc. 
# Nested expansions can happen, so 2[a2[b]c] should be expanded to abbcabbc.

import re

def extrac(s):
  num = int(re.findall(r"(\d)+\[[a-z]+\]", s)[0])
  string = re.findall(r"\d+\[([a-z]+)\]", s)[0]
  return string*num

def decodeString(s):
  s = ">>><<<"+s+">>><<<"
  nextStepChanges = re.findall(r"\d+\[[a-z]+\]", s)
  while(len(nextStepChanges)>0):
    contexts = re.split(r"\d+\[[a-z]+\]", s)
    print(contexts)
    print(nextStepChanges)
    s = ""
    n = len(nextStepChanges)
    for i in range(0,n):
      s = s+contexts[i]
      s = s+extrac(nextStepChanges[i])
    s = s+contexts[-1]
    nextStepChanges = re.findall(r"\d+\[[a-z]+\]", s)
  return s[6:-6]

print(decodeString('1[1[2[1[1[2[bec]]]]]]'))
# abbcabbc