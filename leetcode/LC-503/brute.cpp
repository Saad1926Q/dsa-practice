/*

503. Next Greater Element II

Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 

Example 1:

Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.
Example 2:

Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]

*/

#include <iostream>
#include <vector>
#include <limits>

class Solution {
public:
    std::vector<int> nextGreaterElements(std::vector<int>& nums) {
        std::vector<int> result;
        
        for(std::size_t i=0;i<nums.size();++i){
            int max=std::numeric_limits<int>::min();
            int j=(i+1)%(nums.size());

            while(j!=i){
                if(nums[j]>nums[i]){
                        max=nums[j];
                        break;
                    }
                        
                
                j=(j+1)%(nums.size());
            }

            if(max==std::numeric_limits<int>::min())
                max=-1;

            result.push_back(max);
        }

        return result;
    }
};