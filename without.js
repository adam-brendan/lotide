const without = (source, itemsToRemove) => {
    let newArr = source;
    itemsToRemove.forEach((element) => {
        if (source.includes(element)) {
            let index = newArr.indexOf(element);
            newArr.splice(index, 1);
        }
    })
    console.log(newArr);
}

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

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);