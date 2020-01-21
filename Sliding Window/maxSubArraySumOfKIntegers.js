//Solution 1 - O(n2)
    function maxSubArraySum(arrInt, n) {
        if(!arrInt.length > 0) return null;
        let max = -Infinity; // Done so that we get correct o/p for -ve nos. If initialized to zero, we would get max sum as zero.
       
        for(let i = 0; i < arrInt.length-n+1; i++){
            let sum = 0;
            for(let j = 0; j < n; j++){
                sum += arrInt[i+j];
            }
            if(sum > max) {
                max = sum;
            }
        }
        return max;
    }
    
    maxSubArraySum([-1,-2,-2], 2)
    
   
    // Solution 2 - Sliding Window - O(n)
    
        function maxSubArraySumSliding(arrInt, n){
            let max = -Infinity;
            let temp = 0;
            for(let i =0; i < n; i++) {
                temp+= arrInt[i]
            }
    
            max = temp;
    
            for(let i = num; i < arrInt.length; i++){
                temp = temp - arrInt[i-num]+arrInt[i];
                if(temp > max){
                    max = temp;
                }
            }
            return max;
    
        }
        maxSubArraySum([-1,-2,-2], 2)
    