from typing import List


def binarySearch(arr,t):
    l=0
    r=len(arr)-1

    while l<=r:
        mid=(l+r)//2

        if arr[mid]>t:
            r=mid-1
        elif arr[mid]<t:
            l=mid+1
        else:
            return True
    
    return False


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        
        l=0
        r=len(matrix)-1

        while l<=r:
            mid=(l+r)//2

            if binarySearch(matrix[mid],target)==True:
                return True
            elif matrix[mid][0]>target:
                r=mid-1
            else:
                l=mid+1

        return False
            
