//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let hashmap=new Map()
    let prevIndex=-1

    let result=[] 

    const new_strs=[]
    for(let str of strs){
        new_string=str.split('').sort().join('')
        new_strs.push(new_string)
    }

    for(let i=0;i<strs.length;i++){
        if(hashmap.has(new_strs[i])){
            index=hashmap.get(new_strs[i])
            result[index].push(strs[i])
        }else{
            hashmap.set(new_strs[i],prevIndex+1)
            prevIndex++
            result.push([strs[i]])
        }
    }


    return result
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))