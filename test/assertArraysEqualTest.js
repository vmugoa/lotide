// ASSERT ARRAYS EQUAL FUNCTION:
const assertArraysEqual = require('../assertArraysEqual');

// LET'S TEST OUR CODE!
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // ✅✅✅ Assertion Passed: [1,2,3] === [1,2,3]
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // 🛑🛑🛑 Assertion Failed: [1,2,3] !== [3,2,1]
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // ✅✅✅ Assertion Passed: [1,2,3] === [1,2,3]
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // 🛑🛑🛑 Assertion Failed: [1,2,3] !== [1,2,3]
console.log(assertArraysEqual(["Sam", "Vanessa", "Jame"], ["Jane", "Sam", "Vanessa"])); // 🛑🛑🛑 Assertion Failed: [Sam,Vanessa,Jame] !== [Jane,Sam,Vanessa]
console.log(assertArraysEqual(["Sam", "Vanessa", "Jame"], ["Jane", "Sam", "Vanessa"])); // 🛑🛑🛑 Assertion Failed: [Sam,Vanessa,Jame] !== [Jane,Sam,Vanessa]