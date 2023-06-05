// ASSERT EQUAL FUNCTION:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKeyByValue FUNCTION:
const findKeyByValue = (object, value) => {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // Output: drama
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); // Output: undefined


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Output: ✅✅✅ Assertion Passed: drama === drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Output: ✅✅✅ Assertion Passed: undefined === undefined

