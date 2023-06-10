// TAKE UNTIL FUNCTION

const takeUntil = function(array, callback) { // Function returns a "slice of the array with elements taken from the beginning
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results; // Stop iteration and return results if the callback condition is met
    }
    results.push(item); // Push the element itself into the results array
  }
  return results;
}

// LET'S TEST OUR CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // => [ 1, 2, 5, 7, 2 ]

console.log('---'); // => ---

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

console.log(results2); // => [ 'I\'ve', 'been', 'to', 'Hollywood' ]


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

// LET'S TEST OUR CODE

console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2])); // => ✅✅✅ Assertion Passed: [1,2,5,7,2] === [1,2,5,7,2]

console.log(assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood'])); // => ✅✅✅ Assertion Passed: [I've,been,to,Hollywood] === [I've,been,to,Hollywood]