const middle = (arr) => {
    let mid = [];
    if (arr.length <= 2) {
        return mid;
    } else if (arr.length % 2 === 0) {
        mid.push(arr[(arr.length / 2) - 1])
        mid.push(arr[arr.length / 2])
    } else {
        mid.push(arr[(arr.length - 1) / 2])
    }
    return mid;
}


const assertArraysEqual = (arr1, arr2) => {
    return eqArrays(arr1, arr2) ? console.log("✅✅✅ These arrays are equal!") : console.log("🛑🛑🛑 These arrays are NOT equal!")
}

const eqArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i ++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);


