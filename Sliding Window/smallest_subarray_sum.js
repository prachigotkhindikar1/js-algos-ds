// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’

// Brute force: O(n2)
// Algorithm: 
// 1. Start the outerloop with the first number and run it till length of array.
// 2. Inner loop: Starting with i+1, add the nos until sum >= target sum.
// 3. If we have the condition satisfied. Calculate the length of array and set the minLength and break.

const smallest_subarray_with_given_sum = function(s, arr) {
  let minLength = Infinity;
  for(let i=0; i<arr.length; i++){
    let windowSum = arr[i];
    innerloop:
    for(let j=i+1; j<=arr.length; j++){
      if(windowSum >=s){
        minLength = Math.min(minLength, (j-i));
        break innerloop;
      }
      windowSum+=arr[j]
    }
  }
  return minLength;
};

// Sliding window - Dynamic window
const smallest_subarray_with_given_sum = function(s, arr) {
  let windowStart = 0, minLength = Infinity, windowSum=0;
  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
     windowSum += arr[windowEnd];
    
    while(windowSum >=s){
      minLength = Math.min(minLength, windowEnd-windowStart+1);
      windowSum -= arr[windowStart];
      windowStart += 1;
  }
    
    if(minLength === Infinity) return 0;
    
    return minLength;
}
