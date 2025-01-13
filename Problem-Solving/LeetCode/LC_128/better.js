var longestConsecutive = function(nums) {
    let max_length=1

    sorted=nums.sort()

    let prev=nums[0]

    let length=1
    for(let i=1;i<nums.length;i++){
        if(sorted[i]===prev+1){
            length++

            if(length>max_length){
                max_length=length
            }
        }else{
            length=1
        }

        prev=sorted[i]
    }


    return max_length


};

console.log(longestConsecutive([0,11,12,1,-1,14,15]))