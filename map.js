// const assertArraysEqual = (arr1, arr2) => {
//     return eqArrays(arr1, arr2) ? console.log("✅✅✅ These arrays are equal!") : console.log("🛑🛑🛑 These arrays are NOT equal!")
// }

// const eqArrays = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     } else {
//         for (let i = 0; i < arr1.length; i ++) {
//             if (arr1[i] !== arr2[i]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// const words = ["ground", "control", "to", "major", "tom"];
const map = (array, callback) => {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}
// const results1 = map(words, word => word[0]);
// console.log(results1);

module.exports = map;