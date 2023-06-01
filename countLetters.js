// ASSERT EQUAL FUNCTION:

const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return assertEqual;
};

//--------------------------------

function countLetters(str, letter) {
  let letterCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {  // The charAt() method of String values returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
      letterCount++;
    }
  }
  return letterCount;
}

const str = "Hello, world!";
const letterToCount = "l";
const result = countLetters(str, letterToCount);

console.log(`The letter "${letterToCount}" appears ${result} times in the string "${str}".`);

assertEqual(result, 3);