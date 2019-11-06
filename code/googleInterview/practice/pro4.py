#Given a string, rearrange the string so that no character next to each other are the same. If no such arrangement is possible, then return None.
import string
import operator

count = {}
last_char = 'Z'

def nextChar():
  global count, last_char
  res = 'Z'
  res_count = 0
  for key, value in count.items():
    if(key == last_char): continue
    if(value <= 0): continue
    if(value>res_count):
      res = key
      res_count = value
  last_char = res
  count[res] = count[res]-1
  return res

def checkStr(res):
  N = len(res)
  for i in range(0, N):
    if(res[i]=='Z'): return None
    if(i == 0): continue
    if(res[i]==res[i-1]): return None
  return res

def rearrangeString(s):
  global count, last_char
  N = len(s)
  count['Z'] = -1
  res = ''
  for char in s:
    count[char] = count.get(char, 0) + 1
  if(len(count)==1 and N>1): return None
  for i in range(0, N):
    res = res + nextChar()
  return checkStr(res)

print(rearrangeString('ccccccccccccccccsaaabbb'))

