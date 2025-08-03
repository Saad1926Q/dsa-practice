from typing import List

def atMostK(nums,k):
    l=0
    r=0
    count=0
    map={}
    while r<len(nums):
        if nums[r] in map:
            map[nums[r]]+=1
        else:
            map[nums[r]]=1
        
        
        while len(map)>k:
            if map[nums[l]]==1:
                map.pop(nums[l])
            else:
                map[nums[l]]-=1
            
            l+=1

        count+=(r-l+1)
        r+=1




class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        return atMostK(nums,k)-atMostK(nums,k-1)