class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let s=0,l=nums.length-1;
        while(s <= l){
            if(nums[s] === target){
                return s;
            }
            if(nums[l]=== target){
                return l;
            }
            s++;
            l--;
        }
        return -1;
    }
}
