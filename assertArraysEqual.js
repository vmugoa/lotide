// EQUAL ARRAYS FUNCTION
const eqArrays = require('./eqArrays');

// ASSERT ARRAYS EQUAL FUNCTION:
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return `✅✅✅ Assertion Passed: [${array1}] === [${array2}]` // the two arrays ARE perfectly equal
  } else {
    return `🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`;  // the two arrays are NOT perfectly equal
  }
};

module.exports = assertArraysEqual;