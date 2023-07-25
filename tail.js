const tail = (arr) => {
    return arr.slice(1);
}

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}.`) : console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}.`)
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"