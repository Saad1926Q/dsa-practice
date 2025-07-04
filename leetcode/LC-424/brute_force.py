'''
424. Longest Repeating Character Replacement

Medium

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

'''

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        maxLen=1
        # Generate all possible substrings
        for i in range(len(s)):
            for j in range(i+1,len(s)+1):
                substr=s[i:j]
                chars={}
                for c in substr:
                    if c in chars:
                        chars[c]=chars[c]+1
                    else:
                        chars[c]=1

                maxFreq=0
                for freq in chars.values():
                    maxFreq=max(maxFreq,freq)

                if len(substr)-maxFreq<=k:
                    maxLen=max(maxLen,len(substr))

        return maxLen
                
                