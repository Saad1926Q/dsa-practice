#Not optimized 
#Will Solve later

class Solution(object):
    def isPalindrome(self,string):
        rev=""
        length=len(string)
        for i in range(length):
            rev+=string[length-i-1]
        if rev==string:
            return True
    def longestPalindrome(self, s):
        self.palindromes=[]
        self.substrings=[]
        for i in range(len(s)):
            for j in range(i+1,len(s)+1):
                self.substrings.append(s[i:j])
        
        for substring in self.substrings:
            if self.isPalindrome(substring)==True:
                self.palindromes.append(substring)
        
        maxlen=len(self.palindromes[0])
        self.longest=self.palindromes[0]
        for palindrome in self.palindromes:
            if len(palindrome)>maxlen:
                maxlen=len(palindrome)
                self.longest=palindrome
        
        return self.longest


