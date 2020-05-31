const eqArrays = require("./eqArrays.js");

const eqObjects = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (prop of Object.keys(obj1)) {
        if (!obj2.hasOwnProperty(prop)) {
            return false;
        } else {
            if (Array.isArray(obj1[prop]) && Array.isArray(obj2[prop])) {
                if (!eqArrays(obj1[prop], obj2[prop])) {
                    return false;
                }
            } else if (obj1[prop] !== obj2[prop]) {
                return false;
            }
        }
    }
    return true;
};

module.exports = eqObjects;