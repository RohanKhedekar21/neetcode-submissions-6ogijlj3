class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = [];
        for(let i=0;i<temperatures.length;i++){
            const current = temperatures[i];
            let count = 0;
            let temp = false;
            for(let j=i+1;j<temperatures.length;j++){
                count++;
                if(current < temperatures[j]){
                    res.push(count);
                    temp = true;
                    break;
                }
            }
            if(!temp){
                res.push(0)
            }
        }
        return res;
    }
}
