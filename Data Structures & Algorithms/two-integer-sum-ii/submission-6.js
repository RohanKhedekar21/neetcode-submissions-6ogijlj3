class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let a = 0;
        let b = numbers.length - 1;
        while(a<b){
            let sum = numbers[a] + numbers[b];
            if(sum > target){
                b--;
            }else if(sum < target){
                a++;
            }else{
                return [a+1, b+1];
            }
        }
    }
}
