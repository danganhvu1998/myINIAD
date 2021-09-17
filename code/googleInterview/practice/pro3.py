# Given a number of integers, combine them so it would create the largest number.
def largestNum(nums):
  strNums = []
  for num in nums:
    strNum = str(num)
    strNums.append(strNum+strNum[0])
  strNums.sort(reverse=True)
  res = ''
  for strNum in strNums:
    res = res + strNum[0:len(strNum)-1]
  return res

print(largestNum([17, 7, 2, 45, 79, 72]))
# 7977245217
