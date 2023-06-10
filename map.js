const words = ["ground", "control", "to", "major", "tom"];

// MAP FUNCTION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// LET'S TEST OUR CODE
const results1 = map(words, word => word[0]); // here, we're returning the first letter of each item/word in the words array
console.log(results1); // => [ 'g', 'c', 't', 'm', 't' ]

// ASSERT ARRAYS EQUAL FUNCTION
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

// LET'S TEST OUR CODE
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])); // => ✅✅✅ Assertion Passed: [g,c,t,m,t] === [g,c,t,m,t]