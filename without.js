// WITHOUT FUNCTION
const without = function(source, itemsToRemove) {
  let myNewArray = [];
  for (let i = 0; i < source.length; i++) {
    let found = false;
    for (let j = 0; j < itemsToRemove.length; j++) {  // We're looping through the nested arrays here.
      if (source[i] === itemsToRemove[j]) {
        found = true;
        break;
      };
    };
    if (!found) {
      myNewArray.push(source[i]);
    };
  };
  return myNewArray;
};

module.exports = without;