const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

// LET'S TEST OUR CODE!

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => ✅✅✅ Assertion Passed: true === true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => ✅✅✅ Assertion Passed: false === false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false