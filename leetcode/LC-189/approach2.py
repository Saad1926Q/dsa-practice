from typing import List

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        k=k%len(nums)

        temp=nums[len(nums)-k:] # Last len-k elements

        for i in range(len(nums)-k-1,-1,-1):
            nums[i+k]=nums[i]

        
        for i in range(0,k):
            nums[i]=temp[i]


solution=Solution()

solution.rotate([1,2,3,4,5],3)
        

        


        


