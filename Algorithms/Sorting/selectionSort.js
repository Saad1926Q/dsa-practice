

class Solution{
    selectionSort(arr){
        for(let i=0;i<arr.length;i++){
            let maxIndex=0;
            let j;
            for(j=0;j<arr.length-i;j++){
                if(arr[j]>arr[maxIndex]){
                    maxIndex=j;
                }
            }
            let temp=arr[arr.length-i-1]
            arr[arr.length-i-1]=arr[maxIndex]
            arr[maxIndex]=temp
        }

        return arr;
    }
}

testArray=[12,1,-9,0,8,6,10]

let solution=new Solution()

console.log(solution.selectionSort(testArray))