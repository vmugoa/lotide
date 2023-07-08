const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [1] for [3, 1]", () => {
    assert.deepEqual(tail([3, 1]), [1]);
  });

  it("returns ['Blue!'] for ['Yo Yo', 'Blue!']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Blue!']), ['Blue!']); 
  });
});