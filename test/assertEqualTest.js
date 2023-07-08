// ASSERT EQUAL FUNCTION

const assertEqual = require('../assertEqual');

// LET'S TEST OUR CODE! 
assertEqual("Lighthouse Labs", "Bootcamp"); // => 🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp
assertEqual(1, 1); // => ✅✅✅ Assertion Passed: 1 === 1
assertEqual("hello", "HELLO"); // => 🛑🛑🛑 Assertion Failed: hello !== HELLO
assertEqual("poop", "poop"); // => ✅✅✅ Assertion Passed: poop === poop
assertEqual(23899, 31); // => 🛑🛑🛑 Assertion Failed: 23899 !== 31
