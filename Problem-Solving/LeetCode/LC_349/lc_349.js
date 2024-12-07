/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hashmap=new Map();
    const result=[];

    for(let i=0;i<nums1.length;i++){
        if(hashmap.has(nums1[i])){
            continue;
        }else{
            hashmap.set(nums1[i],i);
        }
    }

    for(let j=0;j<nums2.length;j++){
        if(hashmap.has(nums2[j])){
            result.push(nums2[j]);
            hashmap.delete(nums2[j])
        }
    }


    return result;
};

console.log(1);