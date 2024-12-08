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
t="oleh"

var isAnagram = function(s, t) {
    let hashmap1=new Map()
    let hashmap2=new Map()

    let result=true

    for(let char of s){
        if(hashmap1.has(char)){
            let prev_freq=hashmap1.get(char)
            hashmap1.set(char,prev_freq+1)
        }else{
            hashmap1.set(char,1)
        }
    }

    for(let char of t){
        if(!hashmap1.has(char)){
            return false
        }else if(hashmap2.has(char)){
            let prev_freq=hashmap2.get(char)
            hashmap2.set(char,prev_freq+1)
        }else{
            hashmap2.set(char,1)
        }

    }


    hashmap1.forEach((freq,char) => {
        if(hashmap2.get(char)!==freq){
            result=false;
        }
    });

    return result;
};

console.log(isAnagram(s,t))