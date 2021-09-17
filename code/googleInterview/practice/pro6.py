#You are given an array of integers. Return the length of the longest consecutive elements sequence in the array.
#For example, the input array [100, 4, 200, 1, 3, 2] has the longest consecutive sequence 1, 2, 3, 4, and thus, you should return its length, 4.

def longest_consecutive(nums):
  nums.sort()
  print(nums)
  res = 0
  curr = 1
  N = len(nums)
  last = nums[0]
  for i in range(1, N):
    if(nums[i] == last): continue
    if(nums[i] == last+1):
      curr += 1
      res = max(res, curr)
      last += 1
    else:
      last=nums[i]
      curr=1
  return res

print(longest_consecutive([100, 4, 200, 1,6,7,7,7,7,8,8,8,9,9,9,9,10,11,12,14,15,16,13, 3,2,2,2,2,2, 2]))
# 4