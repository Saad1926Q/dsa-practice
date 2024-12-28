/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

*/
var topKFrequent = function(nums, k) {
    let result=[]
    let frequencies=new Map()

    for(let i=0;i<nums.length;i++){
        if(frequencies.has(nums[i])){
            let count=frequencies.get(nums[i])
            frequencies.set(nums[i],count+1)
        }else{
            frequencies.set(nums[i],1)
        }
    }

    for(let i=1;i<=k;i++){
        let maxKey=0
        let maxValue=0
        for(let [key,value] of frequencies){
            if(value>maxValue){
                maxValue=value
                maxKey=key
            }
        }

        result.push(maxKey)

        frequencies.delete(maxKey)
    }

    return result
};

console.log(topKFrequent([3,1,2,2,3,3,3],2))