

class Solution{
    quickSort(arr){
        if(arr.length<2){
            return arr
        }
        let pivot = arr[arr.length-1]
        let left=[]
        let right=[]
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>pivot){
                right.push(arr[i])
            }else{
                left.push(arr[i])
            }
        }

        return [...this.quickSort(left),pivot,...this.quickSort(right)]
        
    }
}

const testArray=[1,19,-1,7,2,4,5,3]

let solution = new Solution()
console.log(solution.quickSort(testArray))