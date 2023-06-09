// COUNT ONLY FUNCTION

const countOnly = function(allItems, itemsToCount) {
  // allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;