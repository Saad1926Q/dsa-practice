
#include <iostream>
#include <vector>
#include <unordered_map>
#include <stack>

class Solution {
public:
    std::vector<int> nextGreaterElement(std::vector<int>& nums1, std::vector<int>& nums2) {
        std::vector<int> nge;
        std::stack<int> stack;
        std::unordered_map<int,int> map;

        for(int j=nums2.size()-1;j>=0;j--){
            if(stack.empty()){
                stack.push(nums2[j]);
                map[nums2[j]]=-1;
            }else{
                if(stack.top()>nums2[j]){
                    map[nums2[j]]=stack.top();
                    stack.push(nums2[j]);
                }else{
                    while(!stack.empty() && stack.top()<=nums2[j])
                        stack.pop();
                    
                    map[nums2[j]]=stack.empty()?-1:stack.top();
                    stack.push(nums2[j]);
                }
            }

        }


        for (int num : nums1) {
            nge.push_back(map[num]);
        }

        return nge;
    }
};