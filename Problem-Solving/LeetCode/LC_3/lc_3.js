//Given a string s, find the length of the longest substring without repeating characters.

/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

/**
 * @param {string} s
 * @return {number}
 */

s="au";

var lengthOfLongestSubstring = function(s) {
    let max_len=0;

    if(s.length===1){
        return 1;
    }
    for(let i=0;i<s.length;i++){
        let curr_length=0;
        let hashmap=new Map();
        if(s[i]==" "){
            hashmap.set("blank",i);
        }else{
            hashmap.set(s[i],i);
        }
        curr_length++;
        for(let j=i+1;j<s.length;j++){
            if(s[j]==" "){
                if(hashmap.has("blank")){
                    if(curr_length>max_len){
                        max_len=curr_length
                    }
                    break;
                }else{
                    hashmap.set("blank",j);
                    curr_length++;
                }
            }
            else{
                if(hashmap.has(s[j])){
                    if(curr_length>max_len){
                        max_len=curr_length
                    }
                    break;
                }
                hashmap.set(s[j],j);
                curr_length++;
            }
            
            if(curr_length>max_len){
                max_len=curr_length
            }
        }
    }

    return max_len;
};

console.log(lengthOfLongestSubstring(s))