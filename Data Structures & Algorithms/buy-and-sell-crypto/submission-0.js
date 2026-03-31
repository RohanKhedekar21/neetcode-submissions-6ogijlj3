class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        for(let i=0;i<prices.length;i++){
            for(let j=i+1;j<prices.length;j++){
                const currsum = prices[j] - prices[i];
                res = Math.max(currsum, res);
            }
        }

        return res;
    }
}
