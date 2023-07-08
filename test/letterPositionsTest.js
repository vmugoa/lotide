const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// LET'S TEST OUR CODE!
console.log(letterPositions("Lighthouse Labs")); // *see below*

/* Returns this output:

  L: [ 0, 11 ],
  i: [ 1 ],
  g: [ 2 ],
  h: [ 3, 5 ],
  t: [ 4 ],
  o: [ 6 ],
  u: [ 7 ],
  s: [ 8, 14 ],
  e: [ 9 ],
  a: [ 12 ],
  b: [ 13 ]
}

*/