from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        temp=[]

        for num in nums:
            if num!=0:
                temp.append(num)
            
        
        for i in range(len(nums)):
            if i<len(temp):
                nums[i]=temp[i]
            else:
                nums[i]=0
        
        print(nums)


Solution().moveZeroes([1,2,0,1,0,1])
