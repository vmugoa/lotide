// ASSERT EQUAL FUNCTION
const assertEqual = require('./assertEqual');

// HEAD FUNCTION

const head = function(arr) {
  let firstElement = arr[0];
  console.log(firstElement);
  return firstElement;
};

module.exports = head;