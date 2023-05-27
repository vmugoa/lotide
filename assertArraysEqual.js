const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return `✅✅✅ Assertion Passed: these two arrays ARE perfectly equal`;
  } else {
    return `🛑🛑🛑 Assertion Failed: these two arrays are NOT perfectly equal`;
  }
};

// See results of examples below to test code:

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // ✅✅✅ Assertion Passed: these two arrays ARE perfectly equal
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // 🛑🛑🛑 Assertion Failed: these two arrays are NOT perfectly equal
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // ✅✅✅ Assertion Passed: these two arrays ARE perfectly equal
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // 🛑🛑🛑 Assertion Failed: these two arrays are NOT perfectly equal
console.log(assertArraysEqual(["Sam", "Vanessa", "Jame"], ["Jane", "Sam", "Vanessa"])); // 🛑🛑🛑 Assertion Failed: these two arrays are NOT perfectly equal