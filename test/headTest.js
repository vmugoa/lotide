// ASSERT EQUAL FUNCTION
const assertEqual = require('../assertEqual');

// HEAD FUNCTION
const head = require('../head');

// LET'S TEST OUR CODE:

assertEqual(head([5,6,7]), 5);
// => 5
// => ✅✅✅ Assertion Passed: 5 === 5

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// => Hello
// => ✅✅✅ Assertion Passed: Hello === Hello
