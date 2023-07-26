const assertArraysEqual = (arr1, arr2) => {
    eqArrays(arr1, arr2) === true ? console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}.`) : console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}.`)
}

const eqArrays = (arr1, arr2) => {
    let eq;
    for (let i = 0; i < arr1.length; i ++) {
        arr1[i] === arr2[i] ? eq = true : eq = false;
    }
    console.log(eq);
    return eq;
}