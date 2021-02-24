//Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.
//Input: {1, 2, 3, 7}, S=6
//Output: True
//The given set has a subset whose sum is '6': {1, 2, 3}
//https://www.youtube.com/watch?v=_gPcYovP7wc&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=7

const canPartition = function(num, sum) {
  const n = num.length;
  const t = Array(n+1).fill(false).map(() => Array(sum+1).fill(false))
  // Initialization
  for(let i =0 ; i < n+1; i++){
    for(let j =0; j< sum +1; j++){
      if(i === 0){
        t[i][j] = false;
      }
      if( j === 0){
        t[i][j] = true;
      }
    }
  }
  
  // Code choice diagram
  for(let i=1; i<n+1; i++){
    for(let j=1;j<sum+1; j++){
      if(num[i-1]>j){
        t[i][j] = t[i-1][j];
      }else if(num[i-1] <= j){
        t[i][j] = t[i-1][j-num[i-1]] || t[i-1][j];
      }
    }
  }

  return t[n][sum]
};

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);
