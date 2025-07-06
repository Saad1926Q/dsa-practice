class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1)>len(s2):
            return False
        

        windowSize=len(s1)
        matches=0        

        s1_count,s2_count=[0]*26,[0]*26

        for i in range(windowSize):
            s1_count[ord(s1[i])-ord('a')]+=1
            s2_count[ord(s2[i])-ord('a')]+=1
        
        
        for idx in range(26):
            if s1_count[idx]==s2_count[idx]:
                matches+=1
        


        for r in range(windowSize,len(s2)):
            if matches==26:
                return True
            
            left_idx = ord(s2[r - windowSize]) - ord('a') # Character going out of windwo

            right_idx = ord(s2[r]) - ord('a') # Character entering the window

            if s1_count[left_idx] == s2_count[left_idx]:
                matches-=1
            
            s2_count[left_idx] -= 1

            if s1_count[left_idx] == s2_count[left_idx]:
                matches+=1
            

            if s1_count[right_idx] == s2_count[right_idx]:
                matches-=1

            s2_count[right_idx] += 1
            
            if s1_count[right_idx] == s2_count[right_idx]:
                matches+=1
            
        return matches==26



            
            




        

            
            

        



        
        return result


