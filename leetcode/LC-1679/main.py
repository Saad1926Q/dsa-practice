from typing import List
from collections import defaultdict

# Same soln but with a bit cleaner code

class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        freq=defaultdict(int)
        maxOperations=0

        for num in nums:
            if num>=k:
                continue

            if freq[k-num]>0:
                freq[k-num]-=1
                maxOperations+=1
            else:
                freq[num]+=1
    
        return maxOperations


