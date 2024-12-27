/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

*/ 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var subarraySum = function(nums, k) {
    let total=0;
    let current_sum=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===k){
            total++
        }
        current_sum=nums[i]
        for(j=i+1;j<nums.length;j++){
            current_sum+=nums[j]
            if(current_sum===k){
                total++
            }
        }
    }

    return total
};

console.log(subarraySum([11,0,11],11))