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

// [1,2,3].myFilter((a) => a!=2)
