// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); // the actual and expected are perfectly equal
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`); // the actual and expected are NOT perfectly equal
  }
};

module.exports = assertEqual;