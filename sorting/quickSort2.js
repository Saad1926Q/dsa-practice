

class Solution{
    quickSort(arr){
        this.sort(arr,0,arr.length-1)
        return arr
    }

    sort(arr,start,end){
        if(start>=end){
            return;
        }
        let pivot=arr[end]
        let i=start-1
        for (let j = start; j < end; j++) {
            if(arr[j]<pivot){
                i+=1
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }

        let temp=arr[i+1]
        arr[i+1]=arr[end]
        arr[end]=temp

        this.sort(arr,start,i)
        this.sort(arr,i+2,end)

    }
}

const testArray=[1,19,-1,7,2,4,5,3]

let solution = new Solution()
console.log(solution.quickSort(testArray))