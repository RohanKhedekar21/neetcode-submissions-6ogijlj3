class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let sum = 0;
        for (let i = 0; i < heights.length; i++) {
            for (let j = i; j < heights.length; j++) {
                const small = heights[i] < heights[j] ? heights[i] : heights[j]
                const curSum = small * (j-i);
                if(curSum > sum){
                    sum = curSum;
                }
            }
        }
        return sum;
    }
}
