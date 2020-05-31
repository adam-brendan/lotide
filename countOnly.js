const countOnly = (allItems, itemsToCount) => {
    let countObj = {};
    for (arrItem of allItems) {
        if (itemsToCount[arrItem]) {
            countObj[arrItem] = (countObj[arrItem] + 1) || 1
        }
    }
    return countObj;
}

module.exports = countOnly;