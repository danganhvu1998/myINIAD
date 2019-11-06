#Given an array of integers, arr, where all numbers occur twice except one number which occurs once, find the number. Your solution should ideally be O(n) time and use constant extra space. 
class Solution(object):
  def findSingle(self, nums):
    N = len(nums)
    hashTable = [0]*1000050
    hashNumbers = [1000003,1000033,1000037,1000039]
    for hashNumber in hashNumbers:
      currWrite = 0
      # print(hashNumber, nums[0:N])
      for i in range(0, N):
        # print(nums[i], nums[i]%hashNumber)
        hashTable[ nums[i]%hashNumber ] += 1
      for i in range(0, N):
        if( hashTable[ nums[i]%hashNumber ]%2==1 ):
          nums[currWrite] = nums[i]
          currWrite += 1
      for i in range(0, N):
        hashTable[nums[i]%hashNumber] = 0
      N = currWrite
    return nums[0]

nums = list(range(1, 25))*2
nums.append(2000010)
print(Solution().findSingle(nums))