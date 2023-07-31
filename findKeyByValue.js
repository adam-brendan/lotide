const findKeyByValue = (obj, val) => {
    for (key in obj) {
        if (obj[key] === val) {
            return key;
        }
    }
};

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));