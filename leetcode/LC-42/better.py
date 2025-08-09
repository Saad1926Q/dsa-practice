from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        water=0

        leftBoundaries=[0]*len(height)
        rightBoundaries=[0]*len(height)

        for i in range(len(height)):
            j=len(height)-i-1
            if i!=0:
                leftBoundaries[i]=max(leftBoundaries[i-1],height[i-1])

            if j!=len(height)-1:
                rightBoundaries[j]=max(rightBoundaries[j+1],height[j+1])

        
        for idx in range(len(height)):
            if leftBoundaries[idx]>height[idx] and rightBoundaries[idx]>height[idx]:
                water+=min(leftBoundaries[idx],rightBoundaries[idx])-height[idx]

        return water
    
print(Solution().trap([4,2,0,3,2,5]))