// FLATTEN FUNCTION
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

module.exports = flatten;

/* Purpose of flatten function: to take in an array containing elements 
including nested arrays of elements, and return a "flattened" version of 
the array (aka put everything into a single array). */