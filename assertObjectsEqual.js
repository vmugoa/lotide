// ASSERT EQUAL FUNCTION:

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// EQUAL OBJECTS FUNCTION:

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!object2.hasOwnProperty(key)) {
      return false;
    }

    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }

  return true;
};

// ASSERT OBJECTS EQUAL FUNCTION:

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

// LET'S TEST OUR CODE!

const shirtObject = { color: "red", size: "medium" };

const anotherShirtObject = { size: "medium", color: "red" };

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };

const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };


console.log(assertObjectsEqual(shirtObject, anotherMultiColorShirtObject)); 
// => 🛑🛑🛑 Assertion Failed: { color: 'red', size: 'medium' } !== { size: 'medium', colors: [ 'red', 'blue' ] }

console.log(assertObjectsEqual(shirtObject, anotherShirtObject));
// => ✅✅✅ Assertion Passed: { color: 'red', size: 'medium' } === { size: 'medium', color: 'red' }

console.log(assertObjectsEqual(longSleeveShirtObject, multiColorShirtObject));
// => 🛑🛑🛑 Assertion Failed: { size: 'medium', color: 'red', sleeveLength: 'long' } !== { colors: [ 'red', 'blue' ], size: 'medium' }