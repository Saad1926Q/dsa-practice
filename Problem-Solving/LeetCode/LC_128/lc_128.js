//Longest Consecutive Sequence

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

*/

/**
 * @param {number[]} nums
 * @return {number}
 */


var longestConsecutive = function(nums) {
    let map=new Map()
    let max_length=1

    for(let i=0;i<nums.length;i++){
        map.set(nums[i],1)
    }

    for(let i=0;i<nums.length;i++){
        let length=1
        let n =nums[i]
        while(true){
            if(map.has(n+1)){
                length++
            }else{
                break
            }

            n=n+1

            if(length>max_length){
                max_length=length
            }

        }
    }

    return max_length


};

console.log(longestConsecutive([13,0,11,12,1,14]))