
from typing import List

def isPeak(arr:List[int],idx:int)->bool:
    leftNeighbour=arr[idx-1] if idx>0 else float('-inf')
    rightNeighbour=arr[idx+1] if idx<len(arr)-1 else float('-inf')

    return arr[idx]>leftNeighbour and arr[idx]>rightNeighbour



class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        l=0
        r=len(nums)-1

        while l<=r:
            mid=(l+r)//2

            if isPeak(nums,mid):
                return mid

            leftNeighbour=nums[mid-1] if mid>0 else float('-inf') 
            rightNeighbour=nums[mid+1] if mid<len(nums)-1 else float('-inf') 

            if leftNeighbour>rightNeighbour:
                r=mid-1
            else:
                l=mid+1
        