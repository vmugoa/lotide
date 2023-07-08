// TAKE UNTIL FUNCTION
const takeUntil = function(array, callback) { // Function Returns a slice of the array with elements taken from the beginning
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results; // Stop iteration and return results if the callback condition is met
    };
    results.push(item); // Push the element itself into the results array
  };
  return results;
};

module.exports = takeUntil;