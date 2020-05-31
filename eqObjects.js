// const assertEqual = (actual, expected) => {
//     return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

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

const eqObjects = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (prop of Object.keys(obj1)) {
        if (!obj2.hasOwnProperty(prop)) {
            return false;
        } else {
            if (Array.isArray(obj1[prop]) && Array.isArray(obj2[prop])) {
                if (!eqArrays(obj1[prop], obj2[prop])) {
                    return false;
                }
            } else if (obj1[prop] !== obj2[prop]) {
                return false;
            }
        }
    }
    return true;
};

// const ab = { a: "1", b: "2" }; [["a", "1"], ["b", "2"]]
// const ba = { a: "1", b: "2" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;