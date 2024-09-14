

class Solution{
    insertionSort(arr){
        for(let i=1;i<arr.length;i++){
            let numberToInsert=arr[i];
            let j=i-1
            while(j>=0 && arr[j]>numberToInsert){
                arr[j+1]=arr[j]
                j=j-1
            }
            arr[j+1]=numberToInsert
        }
        console.log(arr)
    }
}

testArr=[19,-8,7,16,0,12,1]

let solution= new Solution()
solution.insertionSort(testArr)