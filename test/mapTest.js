const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map.js');

// LET'S TEST OUR CODE!
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]); // here, we're returning the first letter of each item/word in the words array

console.log(results1); // [ 'g', 'c', 't', 'm', 't' ]
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])); // ✅✅✅ Assertion Passed: [g,c,t,m,t] === [g,c,t,m,t]