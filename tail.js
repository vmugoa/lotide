// ASSERT EQUAL FUNCTION
const assertEqual = require('./assertEqual');

// TAIL FUNCTION
const tail = function(arr) {
  let othersElements = arr.slice(1);
  console.log(othersElements);
  return othersElements;
};

module.exports = tail;