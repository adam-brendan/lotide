let newArr = [];
const flatten = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(flatten([1, 2, 3, [4, 5, 6, [7, 8, 9], 10], 11]));