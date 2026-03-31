class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const newArr = s.replace(/[^a-zA-z0-9]/g,"").split('');
        console.log(">>>>newArr",newArr)
        
        let a = 0;
        let b = newArr.length -1;

        while (a < b) {
            if (newArr[a].toUpperCase() !== newArr[b].toUpperCase()) {
                return false;
            }
            a++;
            b--;
        }

        return true;
    }
}
