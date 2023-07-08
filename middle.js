// EQUAL ARRAYS FUNCTION
const eqArrays = require('./eqArrays');

// ASSERT ARRAYS EQUAL FUNCTION:
const assertArraysEqual = require('./assertArraysEqual');

// MIDDLE FUNCTION
const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
};

module.exports = middle;
