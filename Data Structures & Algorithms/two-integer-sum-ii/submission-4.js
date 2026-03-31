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
            const cursum = numbers[a] + numbers[b];
            if(cursum > target){
                b--;
            }else if(cursum < target){
                a++;
            }else{
                console.log(">>a",a,">>b",b)
                return [a+1, b+1];
            }
        }

        return [];
    }
}
