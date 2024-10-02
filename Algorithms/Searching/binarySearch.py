class Solution(object):
    def binarySearch(self,arr,t):
        l=0
        r=len(arr)-1
        while l<=r:
            mid=(l+r)//2
            if arr[mid]==t:
                return mid
            elif arr[mid]>t:
                r=mid-1
            elif arr[mid]<t:
                l=mid+1
        return -1




testArr=[7,8,9,11,12,13,14,15,16,17,18]

solution=Solution()
print(solution.binarySearch(arr=testArr,t=7)) #0
print(solution.binarySearch(arr=testArr,t=11)) #3
print(solution.binarySearch(arr=testArr,t=19)) #-1