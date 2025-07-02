class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s)!=len(t):
            return False
        chars={}
        for c in s:
            if c not in chars:
                chars[c]=1
            else:
                chars[c]+=1
            
        for ch in t:
            if ch in chars:
                if chars[ch]==1:
                    chars.pop(ch)
                else:
                    chars[ch]-=1
            else:
                return False
        return True