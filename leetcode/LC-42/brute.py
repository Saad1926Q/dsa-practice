'''
42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9


'''

from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        water=0

        for i in range(len(height)):
            if i==0:
                leftBoundary=height[i]
                continue

            if leftBoundary<=height[i]:
                leftBoundary=max(leftBoundary,height[i])
                continue

            rightBoundary=0

            for j in range(i+1,len(height)):
                rightBoundary=max(rightBoundary,height[j])

            if rightBoundary>height[i]:
                boundary=min(leftBoundary,rightBoundary)

                water+=(boundary-height[i])
                
            leftBoundary=max(leftBoundary,height[i])

        return water
                        