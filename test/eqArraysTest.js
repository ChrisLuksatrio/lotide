const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArraysTest", () => {
  it("returns true", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

});
