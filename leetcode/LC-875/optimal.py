from typing import List
import math

def calcTimeTaken(curr_k,piles):
    time_taken=0
    
    for pile in piles:
        time_taken+=math.ceil(pile/curr_k)

    return time_taken




class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l=1
        r=max(piles)

        ans=float('inf')

        while l<=r:
            mid=(l+r)//2

            reqTime=calcTimeTaken(mid,piles)

            if reqTime<=h:
                ans=mid
                r=mid-1
            else:
                l=mid+1
        
        return ans


            