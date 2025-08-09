from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        water=0
        
        l=0
        r=len(height)-1

        leftMax=0
        rightMax=0

        while l<r:
            if height[l]<height[r]:
                if leftMax>height[l]:
                    water+=leftMax-height[l]
                else:
                    leftMax=height[l]
                l+=1
            else:
                if rightMax>height[r]:
                    water+=rightMax-height[r]
                else:
                    rightMax=height[r]
                r-=1

        return water
    
print(Solution().trap([4,2,0,3,2,5]))