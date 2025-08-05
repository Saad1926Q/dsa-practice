from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prev_pdts=[]
        next_pdts=[]

        for i in range(len(nums)):
            if i==0:
                prev_pdts.append(1)
            else:
                prev_pdts.append(prev_pdts[i-1]*nums[i-1])


        for j in range(len(nums)-1,-1,-1):
            if j==len(nums)-1:
                next_pdts.append(1)
            else:
                prevIndex=len(next_pdts)-1
                next_pdts.append(next_pdts[prevIndex]*nums[j+1])
        
        next_pdts=next_pdts[::-1]

        return [next_pdts[i]*prev_pdts[i] for i in range(len(nums))]

print(Solution().productExceptSelf([1,2,3,4]))