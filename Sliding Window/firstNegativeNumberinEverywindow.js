// First Negative Number in every Window of Size K

{
    function firstNegative(a, windowSize){

        let i =0, j= 0, queue=[];

        while(j < a.length){

            if(a[j] < 0) {
                queue.push(a[j])
            }

            // If we have not reached window size
            if((j-i+1) < windowSize){
                j++;
            }else if((j-i+1) === windowSize){
                if(queue.length === 0) console.log(0);
                else {
                    console.log(queue[0]);
                    if(a[i] === queue[0]){
                        queue.shift();
                    }
                }
                i++;
                j++;
            }
        }


    }
    firstNegative([12,-1,-7,8,-15,30,13,28], 3)
}
