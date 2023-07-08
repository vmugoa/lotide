// ASSERT EQUAL FUNCTION
const assertEqual = require('../assertEqual');

// HEAD FUNCTION
const tail = require('../tail');

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]); // [ 'Lighthouse', 'Labs' ]
assertEqual(result.length, 2); // ensure we get back two elements -  ✅✅✅ Assertion Passed: 2 === 2
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse" - ✅✅✅ Assertion Passed: Lighthouse === Lighthouse
assertEqual(result[1], "Labs"); // ensure second element is "Labs" - ✅✅✅ Assertion Passed: Labs === Labs

// Test Case 2: Check the original array
const words = ["Yo Yo", "Blue!", "Labs"]; // [ 'Blue!', 'Labs' ]
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements! - ✅✅✅ Assertion Passed: 3 === 3