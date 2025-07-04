

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        maxLen=1
        chars={}
        i=0
        j=0
        chars[s[i]]=1
        maxFreq=1

        while i<=j and j<len(s):
            lenWindow=j-i+1
            
            if lenWindow-maxFreq<=k:
                maxLen=max(maxLen,lenWindow)
                j+=1
                if j<len(s):
                    if s[j] in chars:
                        chars[s[j]]=chars[s[j]]+1
                        maxFreq=max(chars[s[j]],maxFreq)
                    else:
                        chars[s[j]]=1
            else:
                if chars[s[i]]==1:
                    chars.pop(s[i])
                else:
                    chars[s[i]]=chars[s[i]]-1
                i+=1

        return maxLen