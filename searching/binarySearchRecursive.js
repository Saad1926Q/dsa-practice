class Solution{
    binarySearch(arr,t){   //Time Complexity = O(logn)
        let l=0;
        let r=arr.length-1;
        while(l<=r){
            let mid=Math.floor((l+r)/2)
            if(arr[mid]===t){
                return mid;
            }
            else if(arr[mid]<t){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }
        return -1;
    }

    binarySearchRecursive(arr,t){  //Time Complexity = O(logn)
        return this.search(arr,t,0,arr.length-1);
    }
    
    search(arr,t,l,r){
        while(l<=r){
            let mid=Math.floor((l+r)/2)
            if(arr[mid]===t){
                return mid;
            }
            else if(arr[mid]<t){
                l=mid+1;
                return this.search(arr,t,l,r);
            }else{
                r=mid-1;
                return this.search(arr,t,l,r);
            }
        }
        return -1;
    }
}

const testArr = [7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18];

const solution = new Solution();
console.log(solution.binarySearchRecursive(testArr, 7)); // 0
console.log(solution.binarySearchRecursive(testArr, 11)); // 3
console.log(solution.binarySearchRecursive(testArr, 19)); // -1