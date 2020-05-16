const tail = (arr) => {
    return arr.slice(1);
}

const assertEqual = (actual, expected) => {
    return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(tail([2]).length, 0)