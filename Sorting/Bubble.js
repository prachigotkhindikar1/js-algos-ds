// Bubble Sort - moves the largest number to correct position each pass.
function bubbleSort(arr) {
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}  
var sorted = bubbleSort([35,20,13,45,10]);

function bubbleSortReducedPass(array) {
for(var i = array.length; i > 0; i--){
  for(var j = 0; j < i-1; j++) {
    if(array[j] > array[j+1]){
       var temp = array[j];
       array[j] = array[j+1];
       array[j+1] = temp;
    }
  }
}
return array
}
var reducedPass = bubbleSortReducedPass([35,20,13,45,10])

function bubbleSortOptimized(unsortedArray) {
for(var i = unsortedArray.length; i > 0; i--){
  var noSwaps = true;
  for(var j = 0; j < i-1; j++) {
    if(unsortedArray[j] > unsortedArray[j+1]){
       var temp = unsortedArray[j];
       unsortedArray[j] = unsortedArray[j+1];
       unsortedArray[j+1] = temp;
       noSwaps = false;
    }
  }
  if(noSwaps) break;
}
return unsortedArray;
}

var optimzedSort = bubbleSortOptimized([35,20,13,45,10]);