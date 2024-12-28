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

    let freqArr=new Array(nums.length+1)

    for(let[key,value] of frequencies){
        if(!(value in freqArr)){
            freqArr[value]=[key]
        }else{
            freqArr[value].push(key)
        }
    }

    let currCount=0
    for(let i=freqArr.length-1;i>=0;i--){
        if(freqArr[i]!==undefined){
            let elementsNeeded=k-currCount
            if(freqArr[i].length<=elementsNeeded){
                result=[...result,...freqArr[i]]
                currCount+=freqArr[i].length
            }else{
                if(elementsNeeded===1){
                    result=[...result,freqArr[i][0]]
                }else{
                    let slicedArr=freqArr[i].slice(0,elementsNeeded-1)
                    result=[...result,...slicedArr]
                }
                break
            }
        }

        if(currCount===k){
            break;
        }
    }


    return result
};

console.log(topKFrequent([3,1,1,2,2,3,3,3],2))