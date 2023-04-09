// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  }   else if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
  return assertEqual;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "HELLO");
assertEqual("poop", "poop");
assertEqual(23899, 31);
