class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            '}': '{',
            ')': '(',
            ']': '[',
        }
        const stack = [];

        for(const char of s){
            const isSign = char in map;
            if(!isSign){
                stack.push(char);
                continue;
            }

            const isEqual = stack[stack.length-1] === map[char];

            if(isEqual){
                stack.pop();
                continue;
            }

            return false;
        }
        return stack.length === 0;
    }
}
