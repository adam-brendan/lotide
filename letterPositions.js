const letterPositions = (sentence) => {
    const results = {};
    const str = sentence.replace(/\s+/g, '')
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        !results[str[i]] ? results[str[i]] = [i] : results[str[i]].push(i)
    }
    return results;
  };

//   console.log(letterPositions("hello"));

module.exports = letterPositions;
