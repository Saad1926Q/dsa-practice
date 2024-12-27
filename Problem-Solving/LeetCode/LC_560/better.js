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
    let prefixSum=[]

    prevSum=0

    for(let i=0;i<nums.length;i++){
        let curr=prevSum+nums[i]
        prefixSum.push(curr)
        prevSum=curr
    }

    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            let currSum=i-1>=0 ? (prefixSum[j]-prefixSum[i-1]) : (prefixSum[j])
            if(currSum===k){
                total++
            }
        }
    }

    return total
};

console.log(subarraySum([-1,-1,1,-1],0))