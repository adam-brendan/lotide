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

const letterPositions = (sentence) => {
    const results = {};
    const str = sentence.replace(/\s+/g, '')
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        !results[str[i]] ? results[str[i]] = [i] : results[str[i]].push(i)
    }
    return results;
  };

//   console.log(letterPositions("hello"));
//   assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;
