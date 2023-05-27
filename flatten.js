/* Purpose of flatten function: to take in an array containing elements 
including nested arrays of elements, and return a "flattened" version of 
the array (aka put everything into a single array). */

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

const flatten = function(arr) {
  let finalArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        finalArray.push(arr[i][j]);
      }
    } else {
      finalArray.push(arr[i]);
    }
  }
  return finalArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // Output: [1, 2, 3, 4, 5, 6]

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6])); // Output: ✅✅✅ Assertion Passed: these two arrays ARE perfectly equal