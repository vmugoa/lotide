const findKey = require('../findKey');
const assertEqual = require('../assertEqual');

// LET'S TEST OUR CODE
const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

console.log(results); // => "noma"
console.log(assertEqual(results, "noma")); // => ✅✅✅ Assertion Passed: noma === noma