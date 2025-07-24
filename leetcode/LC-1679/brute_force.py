from typing import List

class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        map={}
        maxOperations=0

        for num in nums:
            if num>=k:
                continue

            if (k-num) in map:
                if map[k-num]==1:
                    map.pop(k-num)
                else:
                    map[k-num]-=1

                maxOperations+=1
            else:
                if num in map:
                    map[num]+=1
                else:
                    map[num]=1
                

        return maxOperations