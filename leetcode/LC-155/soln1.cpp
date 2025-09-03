/*
155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.



Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2


*/

#include <iostream>
#include <stack>

class MinStack
{

    std::stack<int> nums;
    std::stack<int> min;

public:
    MinStack()
    {
        
    }

    void push(int val)
    {
        if(nums.size()==0){
            nums.push(val);
            min.push(val);
        }else{
            if(val<=min.top())
                min.push(val);
            
            nums.push(val);
        }
    }

    void pop()
    {
        if(nums.size()==0)
            return;

        if(nums.top()==min.top())
            min.pop();
        
        nums.pop();
    }

    int top()
    {
        return nums.top();
    }

    int getMin()
    {
        return min.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */