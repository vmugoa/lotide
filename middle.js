const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
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


console.log(middle([1, 2, 3])); // Output: [2]
console.log(middle([1, 2, 3, 4])); // Output: [2, 3]
console.log(middle([1])); // Output: []

console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // Output: ✅✅✅ Assertion Passed: these two arrays ARE perfectly equal
