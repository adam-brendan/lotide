let flatArray = [];
const flatten = (arr) => {
    for (item of arr) {
        Array.isArray(item) ? flatten(item) : flatArray.push(item);
    }
    return flatArray;
}

// console.log(flatten([1, 2, [3, 4], 5, [6], [[7, 8], 9, 10]])) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;