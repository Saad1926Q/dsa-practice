from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit=0
        minPrice=prices[0]
        for i in range(1,len(prices)):
            if prices[i]<minPrice:
                minPrice=prices[i]
                continue
            
            profit=max(prices[i]-minPrice,profit)
        
        return profit