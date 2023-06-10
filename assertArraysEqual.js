// ASSERT ARRAYS EQUAL FUNCTION:

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
    return `✅✅✅ Assertion Passed: [${array1}] === [${array2}]` // the two arrays ARE perfectly equal
  } else {
    return `🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`;  // the two arrays are NOT perfectly equal
  }
};

// LET'S TEST OUR CODE!

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // ✅✅✅ Assertion Passed: [1,2,3] === [1,2,3]
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // 🛑🛑🛑 Assertion Failed: [1,2,3] !== [3,2,1]
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // ✅✅✅ Assertion Passed: [1,2,3] === [1,2,3]
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // 🛑🛑🛑 Assertion Failed: [1,2,3] !== [1,2,3]
console.log(assertArraysEqual(["Sam", "Vanessa", "Jame"], ["Jane", "Sam", "Vanessa"])); // 🛑🛑🛑 Assertion Failed: [Sam,Vanessa,Jame] !== [Jane,Sam,Vanessa]
