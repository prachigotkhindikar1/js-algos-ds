// Recursive

/** {
    function knapsack(wt, val, W){
        const n = wt.length;
        return helper(wt, val, n, W);
    }

    function helper(wt, val, n, W){
        //base condn

        if(n===0 || W===0) return 0;
        //choice diag

        if(wt[n-1] <= W){
            return Math.max(val[n-1] + helper(wt, val, n-1, W-wt[n-1]), helper(wt, val, n-1, W));
        }else if(wt[n-1] > W){
            return helper(wt, val, n-1, W);
        }
    }

    console.log(knapsack([1,3,4,5], [1,4,5,7], 7))
} **/

// Memoization

{
    function knapsack(wt, val, W){
        const n = wt.length;
        const t = Array(n+1).fill(-1).map(() => Array(W+1).fill(-1))
        return helper(wt, val, n, W, t);
    }

    function helper(wt, val, n, W, t){
        //base condn

        if(n===0 || W===0) return 0;
        //choice diag

        if(t[n][W] != -1) return t[n][W]

        if(wt[n-1] <= W){
            return t[n][W] = Math.max(val[n-1] + helper(wt, val, n-1, W-wt[n-1], t), helper(wt, val, n-1, W, t));
        }else if(wt[n-1] > W){
            return t[n][W] = helper(wt, val, n-1, W, t);
        }
    }

    console.log(knapsack([1,3,4,5], [1,4,5,7], 7))
}
