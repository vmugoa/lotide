// ASSERT ARRAYS EQUAL FUNCTION:
const assertArraysEqual = require('../assertArraysEqual');

// MIDDLE FUNCTION
const middle = require('../middle');

// LET'S TEST OUR CODE!
console.log(middle([1, 2, 3])); // [2]
console.log(middle([1, 2, 3, 4])); // [2, 3]
console.log(middle([1])); // []
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // ✅✅✅ Assertion Passed: [2] === [2]