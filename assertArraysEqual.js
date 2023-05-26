const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return `🛑🛑🛑 Assertion Failed: these two arrays are NOT perfectly equal`;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return `🛑🛑🛑 Assertion Failed: these two arrays are NOT perfectly equal`;
      }
    }
    return `✅✅✅ Assertion Passed: these two arrays ARE perfectly equal`;
  }
};

// See results of examples below to test code:

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // ✅✅✅ Assertion Passed: these two arrays ARE perfectly equal
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // 🛑🛑🛑 Assertion Failed: these two arrays are NOT perfectly equal
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // ✅✅✅ Assertion Passed: these two arrays ARE perfectly equal
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // 🛑🛑🛑 Assertion Failed: these two arrays are NOT perfectly equal
console.log(eqArrays(["Sam", "Vanessa", "Jame"], ["Jane", "Sam", "Vanessa"])); // 🛑🛑🛑 Assertion Failed: these two arrays are NOT perfectly equal