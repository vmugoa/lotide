const assertObjectsEqual = require('../assertObjectsEqual');

// LET'S TEST OUR CODE!

const object1 = { name: "Vanessa", age: 26 };
const object2 = { age: 26, name: "Vanessa" };
const object3 = { name: "Sam", age: 65 };

assertObjectsEqual(object1, object2); // ✅✅✅ Assertion Passed: { name: 'Vanessa', age: 26 } === { age: 26, name: 'Vanessa' }
assertObjectsEqual(object1, object3); // 🛑🛑🛑 Assertion Failed: { name: 'Vanessa', age: 26 } !== { name: 'Sam', age: 65 }