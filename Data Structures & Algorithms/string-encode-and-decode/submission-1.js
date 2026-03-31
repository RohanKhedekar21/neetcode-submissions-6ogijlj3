class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for(const i of strs){
            str += `${i.length}#${i}`
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(">>>str",str)
        const result = [];
        let i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j++;
            }
            let length = parseInt(str.substring(i,j),10);

            i = j + 1;
            j = i + length;

            result.push(str.substring(i,j));
            i = j;
        }

        return result;
    }
}
