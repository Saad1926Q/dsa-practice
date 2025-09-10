#include <iostream>
#include <vector>
#include <stack>


class Solution {
public:
    std::vector<int> nextGreaterElements(std::vector<int>& nums){
        std::vector<int> nge(nums.size(),-1);
        std::stack<int> stack;

        int n=nums.size();

        for(int i=(2*n)-1;i>=0;i--){
            int j=i%n;

            while(!stack.empty() && stack.top()<=nums[j])
                stack.pop();

            if(i<n && !stack.empty())
                nge[i]=stack.top();
            
            stack.push(nums[j]);
        }

        return nge;
    }

};