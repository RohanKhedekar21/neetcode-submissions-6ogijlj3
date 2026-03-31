class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        
        const res = [];

        this.brackets(n, 0, 0, '', res)

        return res;
    }

    brackets(n, open, close, current, res){
        if(open === close && open === n){
            res.push(current);
            return;
        }

        if(open < n){
            this.brackets(n, open+1, close, current+'(', res)
        }

        if(close < open){
            this.brackets(n, open, close+1, current+')', res);
        }
    }
}
