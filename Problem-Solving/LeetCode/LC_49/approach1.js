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

function isAnagram(s,t){
    let hashmap=new Map()

    for(let char of s){
        if(hashmap.has(char)){
            prev_freq=hashmap.get(char)
            hashmap.set(char,prev_freq+1)
        }else{
            hashmap.set(char,1)
        }
    }

    for(let char of t){
        if(!hashmap.has(char)){
            return false
        }else{
            prev_freq=hashmap.get(char)
            if(prev_freq===1){
                hashmap.delete(char)
            }else{
                hashmap.set(char,prev_freq-1)
            }
        }
    }

    return hashmap.size===0
}

var groupAnagrams = function(strs) {
    let hashmap=new Map()
    let result=[]

    for(let i=0;i<strs.length;i++){
        let grouping=false
        let group=[]
        if(hashmap.has(strs[i])){
            continue
        }
        for(let j=i+1;j<strs.length;j++){
            if(isAnagram(strs[i],strs[j])===true){
                console.log(strs[i],strs[j])
                grouping=true
                hashmap.set(strs[i],'grouped')
                hashmap.set(strs[j],'grouped')
                group.push(strs[j])
            }
        }
        if(grouping==false){
            result.push([strs[i]])
        }else{
            result.push([...group,strs[i]])
        }
    } 

    return result
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

console.log(isAnagram("tea","tan"))


