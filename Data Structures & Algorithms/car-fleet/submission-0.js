class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const len = position.length;
        const pair = position.map((item, index)=> [item, speed[index]]);
        pair.sort((a,b) => b[0] - a[0]);

        let fleetCount = 0;
        const timeToReach = new Array(len);
        for(let i=0;i<len;i++){
            timeToReach[i] = (target - pair[i][0]) / pair[i][1];
            if(i>=1 && timeToReach[i] <= timeToReach[i-1]){
                timeToReach[i] = timeToReach[i-1];
            }else{
                fleetCount++;
            }
        }
        return fleetCount;
    }
}
