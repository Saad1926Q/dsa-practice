// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

//Eg1
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

//Eg2
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


class Solution{
    climbingStaircase(n){  //O(2^n)
        if(n<=2){
            return n;
        }
        
        return this.climbingStaircase(n-1)+this.climbingStaircase(n-2)

    }
}

let solution=new Solution()
console.log(solution.climbingStaircase(3))
console.log(solution.climbingStaircase(4))