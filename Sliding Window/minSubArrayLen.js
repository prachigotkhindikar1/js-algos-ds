// Write a function that returns minimal length of a contiguous subarray of which sum is greater than or equal 
// to the interger passed. If there isn't one return 0.
// maxSubArrayLen(array, sum)

// Solution 1: O(n2)

    function minSubArrayLen(array, sum){
        let minLen = Infinity;
        for(let i=0; i< array.length; i++) {
            let temp = 0;
            let j = i;
            while(temp < sum && j < array.length) {
                temp+=array[j];
                j++;
            }
            if(temp >= sum) {
                minLen = Math.min(minLen, (j-i))
            }
        }
        return minLen === Infinity ? 0 : minLen;
    }
minSubArrayLen([2,3,1,2,4,3], 7) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 --> [62] greater than 52