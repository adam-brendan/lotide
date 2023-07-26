const eqArrays = (arr1, arr2) => {
    let eq;
    for (let i = 0; i < arr1.length; i ++) {
        arr1[i] === arr2[i] ? eq = true : eq = false;
    }
    console.log(eq);
    return eq;
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}.`) : console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}.`)
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS