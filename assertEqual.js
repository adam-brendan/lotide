// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}.`) : console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}.`)
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);