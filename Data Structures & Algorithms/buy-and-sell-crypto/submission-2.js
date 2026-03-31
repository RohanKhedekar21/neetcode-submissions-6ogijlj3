class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        for(let i=0;i<prices.length;i++){
            for(let j=i+1;j<prices.length;j++){
                const temp = prices[j] - prices[i];
                if(profit < temp){
                    profit = temp;
                }         
            }
        }
        return profit;
    }
}
