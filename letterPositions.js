// ASSERT EQUAL FUNCTION:

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }   else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return assertEqual;
};

// ASSERT ARRAY EQUALS FUNCTION:

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

console.log(assertArraysEqual(["hello"], ["hello"])); // test

// LETTER POSITIONS FUNCTION:

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    // Step 1: Check if the character is not a space
    if (sentence[i] !== ' ') {
      // Step 2: Check if the character is not in the results object
      if (!results[sentence[i]]) {
        // If it's not, create an array with the current index for that character
        results[sentence[i]] = [i];
      } else {
        // If it's already in the object, push the current index into the array
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions("Lighthouse Labs"));  // => see below

/* Returns this output:

  L: [ 0, 11 ],
  i: [ 1 ],
  g: [ 2 ],
  h: [ 3, 5 ],
  t: [ 4 ],
  o: [ 6 ],
  u: [ 7 ],
  s: [ 8, 14 ],
  e: [ 9 ],
  a: [ 12 ],
  b: [ 13 ]
}

*/