class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();

        for(const num of nums){
            set.add(num);
        }

        let max = 0;

        for(let i=0;i<nums.length;i++){
            let val = nums[i];
            let count = 1;

            if(set.has(val-1)){
                continue;
            }

            while(set.has(++val)){
                count++;
            }

            max = Math.max(count, max);
        }

        return max;

    }
}
