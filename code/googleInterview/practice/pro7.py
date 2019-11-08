# Given a list of numbers of size n, where n is greater than 3, find the maximum and minimum of the list using less than 2 * (n - 1) comparisons.
def find_min_max(nums):
  res_min = nums[0]
  res_max = nums[0]
  pos_max = 0
  N = len(nums)
  for i in range(1, N):
    if(res_max<nums[i]):
      res_max = nums[i]
      pos_max = i
  for i in range(1, pos_max):
    if(res_min>nums[i]):
      res_min = nums[i]
  for i in range(pos_max+1, N):
    if(res_min>nums[i]):
      res_min = nums[i]
  return (res_min, res_max)

print(find_min_max([3, 5, 1, 2, 4, 8]))
# (1, 8)
