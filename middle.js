const middle = (arr) => {
    const middleArr = [];
    if (arr.length > 2 && arr.length % 2 === 0) {
        middleArr.push(arr[(arr.length) / 2 - 1]);
        middleArr.push(arr[(arr.length) / 2]);
    } else if (arr.length > 2 && arr.length % 2 !== 0) {
        middleArr.push(arr[(arr.length - 1) / 2 ]);
    } return middleArr;
}

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));