// const assertEqual = (actual, expected) => {
//     return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };


const countLetters = (str) => {
    let countObj = {};
    for (letter of str.replace(/\s+/g, '')) {
        countObj[letter] = (countObj[letter] + 1) || 1
    }
    return countObj;
}

// console.log(countLetters("lighthouse in the house"))

module.exports = countLetters;
