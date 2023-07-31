const countOnly = (allItems, itemsToCount) => {
    const results = {};
    for (item of allItems) {
        if (itemsToCount[item]) {
            results[item] ? results[item] += 1 : results[item] = 1;
        }
    }
    return results;
};

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  console.log(result1);