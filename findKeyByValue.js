// ASSERT EQUAL FUNCTION:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FIND KEY BY VALUE FUNCTION:
const findKeyByValue = (object, value) => {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {  //Here, we're scanning the object and returning the first key which contains the given value
      return key;
    }
  }
  return undefined; // If no key with that given value is found, then it should return undefined.
};

// LET'S TEST OUT CODE

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // => drama
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); // => undefined

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => ✅✅✅ Assertion Passed: drama === drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => ✅✅✅ Assertion Passed: undefined === undefined

