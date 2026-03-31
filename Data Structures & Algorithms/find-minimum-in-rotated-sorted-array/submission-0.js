class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let temp = nums[0];
        for(const v of nums){
            if(v < temp){
                temp = v;
            }
        }
        return temp;
    }
}
