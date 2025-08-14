'''

3643. Flip Square Submatrix Vertically

You are given an m x n integer matrix grid, and three integers x, y, and k.

The integers x and y represent the row and column indices of the top-left corner of a square submatrix and the integer k represents the size (side length) of the square submatrix.

Your task is to flip the submatrix by reversing the order of its rows vertically.

Return the updated matrix.



'''

from typing import List

class Solution:
    def reverseSubmatrix(self, grid: List[List[int]], x: int, y: int, k: int) -> List[List[int]]:
        for i in range(x,x+(k)//2):
            row_idx=i
            inv_row_idx=x+k-1-i+x

            for j in range(y,y+k):
                temp=grid[row_idx][j]
                grid[row_idx][j]=grid[inv_row_idx][j]
                grid[inv_row_idx][j]=temp
            
        return grid

