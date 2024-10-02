
class Solution{
    cartesianPdt(arr1,arr2){
        const result=[]
        for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr2.length;j++){
                const subArr=[]
                subArr.push(arr1[i])
                subArr.push(arr2[j])
                result.push(subArr)
            }
        }
        return result
    }
}

const testArr1=[1,2]
const testArr2=[3,4,5]

let solution=new Solution()
console.log(solution.cartesianPdt(testArr1,testArr2))