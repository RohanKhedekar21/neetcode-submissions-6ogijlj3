class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for(const i of strs){
            result += `${i}:;`
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(">>>>>str",str)
        const result = str.split(":;");
        result.pop()
        return result;
    }
}
