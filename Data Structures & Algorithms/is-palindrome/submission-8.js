class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isCopy = s.replace(/[^a-zA-Z0-9]/g,"").split('');
        let a = 0;
        let b = isCopy.length - 1;
        while(a<b){
            if(isCopy[a].toUpperCase() !== isCopy[b].toUpperCase()){
                return false;
            }
            a++;
            b--;
        }
        return true;
    }
}
