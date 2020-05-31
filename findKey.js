const findKey = (obj, callback) => {
    for (prop of Object.keys(obj)) {
        if (callback(obj[prop])) {
            return prop;
        }
    }
    return undefined;
}

// console.log(findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 2))

module.exports = findKey;