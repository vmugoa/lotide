const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');

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
