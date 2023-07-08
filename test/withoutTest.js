const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

// LET'S TEST OUR CODE!
const words = ["hello", "world", "lighthouse"];
const filteredWords = without(words, ["lighthouse"]);
console.log(filteredWords); // [ 'hello', 'world' ]

// Make sure the original array was not altered by the without function:
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"])); // ✅✅✅ Assertion Passed: these two arrays ARE perfectly equal

// Looks like the original has been confirmed to not have been changed!