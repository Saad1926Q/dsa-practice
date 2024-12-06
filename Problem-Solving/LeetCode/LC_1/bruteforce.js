//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(j==i){
                break;
            }

            if(nums[i]+nums[j]===target){
                return [i,j];
            }
        }
    }
};