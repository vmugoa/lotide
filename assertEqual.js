<<<<<<< HEAD
// ASSERT EQUAL FUNCTION

=======
// FUNCTION IMPLEMENTATION
>>>>>>> 0ca98c8 (Updated to include notes)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); // the actual and expected are perfectly equal
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`); // the actual and expected are NOT perfectly equal
  }
};

// LET'S TEST OUR CODE! 
assertEqual("Lighthouse Labs", "Bootcamp"); // => 🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp
assertEqual(1, 1); // => ✅✅✅ Assertion Passed: 1 === 1
assertEqual("hello", "HELLO"); // => 🛑🛑🛑 Assertion Failed: hello !== HELLO
assertEqual("poop", "poop"); // => ✅✅✅ Assertion Passed: poop === poop
assertEqual(23899, 31); // => 🛑🛑🛑 Assertion Failed: 23899 !== 31
