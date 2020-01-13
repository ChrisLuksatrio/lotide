const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const head = require('../head.js');

describe("#assertEqualTest", () => {
  it("returns 5", () => {
    
    assert.strictEqual(assertEqual(head([5,6,7]), 5));

  });

});

