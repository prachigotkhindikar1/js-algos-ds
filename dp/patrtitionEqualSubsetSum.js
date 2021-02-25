//Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
//Input: nums = [1,5,11,5]
//Output: true
//Explanation: The array can be partitioned as [1, 5, 5] and [11].
//https://www.youtube.com/watch?v=UmMh7xp07kY&ab_channel=AdityaVerma

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum = sum+nums[i];
    }
    // Sum is odd, cannot break into 2 subsets of equal sum
    if(sum % 2 !== 0){
        return false;
    }else if(sum % 2 === 0) {
        return subsetSum(nums, sum/2);
    }   
};

function subsetSum(arr, sum){
    const n = arr.length;
    // Initialize matrix to false
    const t = Array(n+1).fill(false).map(() => Array(sum+1).fill(false));
    
    // For i=0 - everything will be false since we cannot find a subset when arr size is 0.
    // For j=0 - everything will be true since we can find a subset even though sum is 0
    for(let i=0; i<n+1; i++){
        for(let j=0; j<sum+1; j++){
            if(i===0){
                t[i][j] = false;
            } if(j===0){
                t[i][j] = true;
            }
        }
    }
    
    
    for(let i=1; i<n+1; i++){
        for(let j=1; j<sum+1; j++){
            if(arr[i-1] > j){
                t[i][j] = t[i-1][j];
            }else if(arr[i-1] <= j){
                t[i][j] = t[i-1][j-arr[i-1]] || t[i-1][j]
            }
        }
    }
    
    return t[n][sum];
}
