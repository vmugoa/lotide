// ASSERT EQUAL FUNCTION

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }   else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return assertEqual;
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// COUNT ONLY FUNCTION

const countOnly = function(allItems, itemsToCount) {
  // allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

// LET'S TEST OUR CODE!

const allItems = ['a', 'a', 'b', 'c', 'd', 'e', 'a'];
const itemsToCount = { "a": true, "d": true, "f": true };

const result = countOnly(allItems, itemsToCount);

console.log(result); // => { a: 3, d: 1 }

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1); // => "✅✅ Assertion Passed: 1 === 1"
assertEqual(result1["Karima"], undefined); // => "✅✅✅ Assertion Passed: undefined === undefined"
assertEqual(result1["Fang"], 2); // => "✅✅✅ Assertion Passed: 2 === 2"
assertEqual(result1["Agouhanna"], undefined); // => "✅✅✅ Assertion Passed: undefined === undefined"

