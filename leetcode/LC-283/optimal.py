from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        nextNonZero=0

        for num in nums:
            if num!=0:
                nums[nextNonZero]=num
                nextNonZero+=1
        

        for i in range(nextNonZero,len(nums)):
            nums[i]=0

        
        print(nums)

Solution().moveZeroes([1,2,0,1,0,0])
