'''
567. Permutation in String

Medium

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false


'''


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        result=False

        chars={}
        for char in s1:
            if char in chars:
                chars[char]+=1
            else:
                chars[char]=1

        for i in range(len(s2)):
            for j in range(i+1,len(s2)+1):
                substr=s2[i:j]
                temp_chars=chars.copy()
                if len(substr)==len(s1):
                    for ch in substr:
                        if ch in temp_chars:
                            if temp_chars[ch]==1:
                                temp_chars.pop(ch)
                            else:
                                temp_chars[ch]-=1
                        else:
                            break
                    
                    if len(temp_chars)==0:
                        return True
                    
        return result

                

