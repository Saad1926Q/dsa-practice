// Time Complexity is O(nlogn)

class Solution{
    mergeSort(arr){
        if(arr.length<=1){
            return arr;
        }
        let mid=Math.floor(arr.length/2)

        const sortedLeft=this.mergeSort(arr.slice(0,mid))
        const sortedRight=this.mergeSort(arr.slice(mid))

        return this.merge(sortedLeft,sortedRight)
    }

    merge(left,right){
        const sorted=[]
        let leftPointer=0
        let rightPointer=0

        while(leftPointer<=left.length-1 && rightPointer<=right.length-1){
            if(left[leftPointer]<right[rightPointer]){
                sorted.push(left[leftPointer])
                leftPointer++
            }else{
                sorted.push(right[rightPointer])
                rightPointer++
            }
        }

        if(leftPointer<=left.length-1){
            for(let i=leftPointer;i<left.length;i++){
                sorted.push(left[i])
            }
        }else if(rightPointer<=right.length-1){
            for(let i=rightPointer;i<right.length;i++){
                sorted.push(right[i])
            }
        }

        return sorted
    }
}

const testArray=[19,8,-5,14,12,1,3,-9]

let solution=new Solution()
console.log(solution.mergeSort(testArray))