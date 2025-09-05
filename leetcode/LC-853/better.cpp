#include <iostream>
#include <vector>
#include <stack>
#include <algorithm> 
#include <utility> 


class Solution {
public:
    int carFleet(int target, std::vector<int>& position, std::vector<int>& speed) {
        std::vector<int> distance;
        std::vector<double> time;
        std::vector<std::pair<int,int>> cars;
        std::stack<double> stack;

        int n=position.size();

        for(std::size_t i=0;i<n;++i){
            cars.emplace_back(position[i],speed[i]);
        }

        std::sort(cars.rbegin(),cars.rend());

        for(std::size_t i=0;i<n;++i){
            time.push_back((double)(target - cars[i].first) / cars[i].second);
        }

        for(std::size_t i=0;i<n;++i){
            if(stack.size()==0)
               stack.push(time[i]); 
            else{
                if(time[i]<=stack.top())
                    continue;
                
                stack.push(time[i]);
            }
        }

        return stack.size();


    }
};