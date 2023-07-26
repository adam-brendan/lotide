const assertArraysEqual = (arr1, arr2, actual, expected) => {
    eqArrays(arr1, arr2) === true ? console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}.`) : console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}.`)
}

const eqArrays = (arr1, arr2) => {
    let eq;
    for (let i = 0; i < arr1.length; i ++) {
        arr1[i] === arr2[i] ? eq = true : eq = false;
    }
    console.log(eq);
    return eq;
}