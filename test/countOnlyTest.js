const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

// LET'S TEST OUR CODE!

const allItems = ['a', 'a', 'b', 'c', 'd', 'e', 'a'];
const itemsToCount = { "a": true, "d": true, "f": true };

const result = countOnly(allItems, itemsToCount);

console.log(result); // { a: 3, d: 1 }

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

assertEqual(result1["Jason"], 1); // ✅✅ Assertion Passed: 1 === 1
assertEqual(result1["Karima"], undefined); // ✅✅✅ Assertion Passed: undefined === undefined
assertEqual(result1["Fang"], 2); // ✅✅✅ Assertion Passed: 2 === 2
assertEqual(result1["Agouhanna"], undefined); // ✅✅✅ Assertion Passed: undefined === undefined

