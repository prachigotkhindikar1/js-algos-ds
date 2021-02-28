// You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
// Find out how many ways to assign symbols to make sum of integers equal to target S.
// Leetcode - 494
/**
* Input: nums is [1, 1, 1, 1, 1], S is 3. 
* Output: 5
* Explanation: 
* -1+1+1+1+1 = 3
* +1-1+1+1+1 = 3
* +1+1-1+1+1 = 3
* +1+1+1-1+1 = 3
* +1+1+1+1-1 = 3
* There are 5 ways to assign symbols to make the sum of nums be target 3.
*/

var findTargetSumWays = function(nums, S) {
    let arraySum =0;
    nums.forEach((num) => (arraySum += num));
    
    if(S > arraySum) return 0;
    
    return (S+arraySum) % 2 !== 0 ? 0 : subsetSum(nums, ((S+arraySum)/2))
};

function subsetSum(nums, sum){
    const n = nums.length;
    const t = Array(n+1).fill(0).map(() => Array(sum+1).fill(0));
    
    for(let i =0; i<n+1; i++){
        for(let j=0; j< sum+1; j++){
            if(j==0) {
                t[i][j] = 1;
            }
        }
    }
    
        for(let i=1; i<n+1; i++){
        for(let j = 0; j< sum+1; j++){
            if(nums[i-1] > j){
                t[i][j] = t[i-1][j]
            }else if(nums[i-1] <= j){
                t[i][j] = t[i-1][j] + t[i-1][j-nums[i-1]];
            } 
        }
    }
    
    return t[n][sum];   
}
