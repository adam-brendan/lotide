let flatArray = [];
const flatten = (arr) => {
    for (item of arr) {
        Array.isArray(item) ? flatten(item) : flatArray.push(item);
    }
    return flatArray;
}

module.exports = flatten;