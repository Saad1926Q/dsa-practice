var longestConsecutive = function(nums) {
    if(nums.length===0){
        return 0
    }

    let set=new Set(nums)
    let max_length=1

    for(const num of set){
        if(!set.has(num-1)){
            let curr_length=1
            let curr=num
            while(set.has(curr+1)){
                 curr+=1
                 curr_length+=1
            }
            if(curr_length>max_length){
                max_length=curr_length 
             }
        }
    }

    return max_length
};

console.log(longestConsecutive([]))