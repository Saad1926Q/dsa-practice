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
    let total=0
    let hashmap=new Map()


    let currSum=0

    hashmap.set(currSum,1)  //This is the empty prefix that has the sum 0
    
    for(let i=0;i<nums.length;i++){
        currSum+=nums[i]
        if (hashmap.has(currSum - k)) { //Basically does hashmap contain something which we can chop off to get sum=k

            let count = hashmap.get(currSum - k)
            total += count
        }

        if(hashmap.has(currSum)){
            let count=hashmap.get(currSum)
            hashmap.set(currSum,count+1)
        }else{
            hashmap.set(currSum,1)
        }
    }


    return total;
}

console.log(subarraySum([11,0,-11,11],11))