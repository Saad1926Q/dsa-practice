from typing import List


def reverse_subarray(arr,start,end):
    
    while start<end:
        temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp

        start+=1
        end-=1



class Solution:    
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        k=k%len(nums)

        reverse_subarray(nums,0,len(nums)-k-1)
        reverse_subarray(nums,len(nums)-k,len(nums)-1)
        reverse_subarray(nums,0,len(nums)-1)

        print(nums)



solution=Solution()

solution.rotate([1,2,3,4,5,6,7],3)

        

        
        