// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’

// Brute force: O(n2)
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

