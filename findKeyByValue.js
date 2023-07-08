// FIND KEY BY VALUE FUNCTION:
const findKeyByValue = (object, value) => {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {  //Here, we're scanning the object and returning the first key which contains the given value
      return key;
    }
  }
  return undefined; // If no key with that given value is found, then it should return undefined.
};

module.exports = findKeyByValue;
