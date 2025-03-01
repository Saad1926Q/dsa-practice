'''
15. 3Sum

Medium

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

'''



class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        triplets=[]
        nums.sort()

        for i in range(len(nums)-2):
            if nums[i]>0:
                break

            if i>0 and nums[i]==nums[i-1]:
                continue
            
            l=i+1
            r=len(nums)-1

            while l<r:
                threesum=nums[i]+nums[l]+nums[r]
                if threesum<0:
                    l+=1
                elif threesum>0:
                    r-=1
                else:
                    triplets.append([nums[i],nums[l],nums[r]])
                    l+=1

                    while l<r and nums[l]==nums[l-1]:
                        l+=1
        return triplets
    

solution=Solution()
print(solution.threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))