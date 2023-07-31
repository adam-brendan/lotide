const letterPositions = (sentence) => {
    const noSpaces = sentence.split(" ").join().split("");
    const result = {};
    for (let i = 0; i < noSpaces.length; i ++) {
        result[noSpaces[i]] ? result[noSpaces[i]].push(i): result[noSpaces[i]] = [i];
    }

    return result;
}

console.log(letterPositions("hello"));
console.log(letterPositions("The quick brown fox jumped over the lazy dog."));