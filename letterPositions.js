// LETTER POSITIONS FUNCTION:
const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    // Step 1: Check if the character is not a space
    if (sentence[i] !== ' ') {
      // Step 2: Check if the character is not in the results object
      if (!results[sentence[i]]) {
        // If it's not, create an array with the current index for that character
        results[sentence[i]] = [i];
      } else {
        // If it's already in the object, push the current index into the array
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;