const without = function(source, itemsToRemove) {
  let myNewArray = [];

  for (let i = 0; i < source.length; i++) {
    let found = false;

    for (let j = 0; j < itemsToRemove.length; j++) {  // We're looping through the nested arrays here.
      if (source[i] === itemsToRemove[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      myNewArray.push(source[i]);
    }
  }
  return myNewArray;
};

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

// Let's tes our code below to see if the function works:

const words = ["hello", "world", "lighthouse"];
const filteredWords = without(words, ["lighthouse"]);
console.log(filteredWords); // Output: [ 'hello', 'world' ]

// Make sure the original array was not altered by the without function:
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"])); // Output: ✅✅✅ Assertion Passed: these two arrays ARE perfectly equal

// Looks like the original is confirmed to not have been changed!