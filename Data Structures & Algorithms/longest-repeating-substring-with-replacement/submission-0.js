class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left=0,maxLength=0,maxFreq=0;
        const charCount={};

        for(let right=0;right<s.length;right++){
            const char = s[right];
            charCount[char] = (charCount[char] || 0)+1;

            maxFreq = Math.max(maxFreq, charCount[char]);

            while((right-left+1)-maxFreq > k){
                charCount[s[left]] -= 1;
                left++;
            }

            maxLength = Math.max(maxLength, right-left+1);
        }

        return maxLength;
    }
}
