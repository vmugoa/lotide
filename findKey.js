// FIND KEY FUNCTION
const findKey = function (object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
   };
  };
}

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

// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); // the actual and expected are perfectly equal
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`); // the actual and expected are NOT perfectly equal
  }
};

// LET'S TEST OUR CODE:
console.log(assertEqual(results, "noma")); // => ✅✅✅ Assertion Passed: noma === noma
