class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const map = new Map();

        for (const value of nums) {
            map.has(value) ? map.set(value, map.get(value) + 1) : map.set(value, 1);
        }

        return Array.from(map).sort((a,b)=> b[1]-a[1]).map(item => item[0]).slice(0,k);

    }
}
