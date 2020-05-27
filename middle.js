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

module.exports = middle;


