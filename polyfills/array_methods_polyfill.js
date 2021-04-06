// forEach

// Array.prototype.myForEach = function (callback) {
//     for (i = 0; i < this.length; i++) {
//         callback(this[i]);
//     }
// }

// [1, 2, 3].myForEach(function (a) { console.log(a) });


//map

// Array.prototype.myMap = function (callback) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push(callback(this[i]));
//     }
//     return arr;
// }

// [1, 2, 3].myForEach(function (a) { return a });


//filter

// Array.prototype.myFilter = function (callback) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i])) {
//             arr.push(this[i])
//         }
//     }
//     return arr;
// }

// // [1,2,3].myFilter((a) => a!=2)


// Array.prototype.myReduce = function (callback, initialValue) {
//     var accumulator = initialValue;
//     for (var i = 0; i < this.length; i++) {
//         accumulator = callback(accumulator, this[i]);
//     }
//     return accumulator;
// }

// [1, 2, 3, 4].myReduce((total, a) => total + a, 10)

// [1, 2, 3, 4].myReduce(function (total, a) { return total + a }, 10)



// const flattenStructure = entries => (
//     entries
//     .flatMap(entry => [entry, ...flattenStructure(entry.children || [])])
//     .flat()
//   )
