
// HEAD FUNCTION

const head = function(arr) {
  let firstElement = arr[0];
  console.log(firstElement);
  return firstElement;
};


// ASSERT EQUAL FUNCTION

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }   else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return assertEqual;
};

// LET'S TEST OUR CODE:

assertEqual(head([5,6,7]), 5);
// => 5
// => ✅✅✅ Assertion Passed: 5 === 5

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// => Hello
// => ✅✅✅ Assertion Passed: Hello === Hello
