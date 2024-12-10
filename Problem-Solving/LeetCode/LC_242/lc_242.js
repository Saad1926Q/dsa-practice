/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Given two strings s and t, return true if t is an anagramof s, and false otherwise.

/*
Input: s = "anagram", t = "nagaram"

Output: true
*/

s="hello"
t="olehl"

var isAnagram = function(s, t) {
    let hashmap=new Map()

    let result=true

    for(let char of s){
        if(hashmap.has(char)){
            let prev_freq=hashmap.get(char)
            hashmap.set(char,prev_freq+1)
        }else{
            hashmap.set(char,1)
        }
    }

    for(let char of t){
        if(!hashmap.has(char)){
            return false
        }else if(hashmap.has(char)){
            let prev_freq=hashmap.get(char)
            if(prev_freq===1){
                hashmap.delete(char)
            }else{
                hashmap.set(char,prev_freq-1)
            }
        }

    }

    if(hashmap.size===0){
     return true   
    }else{
        return false
    }
};

console.log(isAnagram(s,t))