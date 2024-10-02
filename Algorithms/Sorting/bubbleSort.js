//Time Complexity = O(n^2)

class Solution{
    bubbleSort(arr){
        for(let i=0;i<arr.length-1;i++){
            let swapped=false;
            for(let j=0;j<arr.length-1;j++){
                if(arr[j]>arr[j+1]){
                    let temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    swapped=true;
                }
            }

            if(!swapped){
                break;
            }
        }
    }
}

const testArray=[12,20,17,-1,18,14,15,1]

let solution=new Solution();
solution.bubbleSort(testArray)
console.log(testArray)
