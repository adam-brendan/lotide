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

// console.log(countOnly([1, 1, 2, 3, 4, 4, 5], {1: true, 2: false, 3: true, 4: true}))

// const assertEqual = (actual, expected) => {
//     return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

// const firstNames = [
//     "Karl",
//     "Salima",
//     "Agouhanna",
//     "Fang",
//     "Kavith",
//     "Jason",
//     "Salima",
//     "Fang",
//     "Joe"
//   ];
  
//   const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
  
//   assertEqual(result1["Jason"], 1);
//   assertEqual(result1["Karima"], undefined);
//   assertEqual(result1["Fang"], 2);