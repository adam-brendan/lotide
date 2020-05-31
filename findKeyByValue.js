const findKeyByValue = (obj, val) => {
    for (key_value of Object.entries(obj)) {
        if (key_value[1] === val) {
            return key_value[0]
        }
    }
    return undefined;
}

module.exports = findKeyByValue;