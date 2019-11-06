# Given a sorted list of positive numbers, find the smallest positive number that cannot be a sum of any subset in the list.

def findSmallest(nums):
  maxCreated = nums[0]
  N = len(nums)
  for i in range(1, N):
    if( maxCreated+1 < nums[i] ): return maxCreated+1
    maxCreated += nums[i]
  return maxCreated+1

print(findSmallest([1, 2, 3, 8, 9, 10]))