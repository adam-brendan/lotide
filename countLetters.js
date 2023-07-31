const countLetters = (str) => {
    const result = {};
    for (letter of str.split(" ").join("").split("")) {
        result[letter] ? result[letter] += 1 : result[letter] = 1;
    }
    return result;
}

console.log(countLetters("Lighthouse in the house"));