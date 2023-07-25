const head = (arr) => {
    return arr[0];
}

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}.`) : console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}.`)
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([88,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");