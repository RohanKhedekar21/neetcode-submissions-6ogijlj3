class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const helperDesk = [];
        const len = temperatures.length;
        const res = new Array(temperatures.length).fill(0);

        for (let i = len - 1; i >= 0; i--) {
            while (helperDesk.length > 0 && temperatures[i] >= temperatures[helperDesk[helperDesk.length - 1]]) {
                helperDesk.pop();
            }
            
            if (helperDesk.length > 0) {
                res[i] = helperDesk[helperDesk.length - 1] - i;
            }
            helperDesk.push(i)
        }
        return res;

    }
}
