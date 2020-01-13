const assert = require('chai').assert;
const assertArraysEqual = require("../assertArraysEqual")
const middle = require("../middle")

describe("#asserArraysEqualsTest", () => {
  it("returns true", () => {
    assert.strictEqual(assertArraysEqual(middle([1]), [], true));
  });

  it("returns true", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2]), [], true));
  });

  it("returns true", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2], true));
  });

  it("returns true", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true));
  });

  it("returns true", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3], true));
  });

  it("returns true", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true));
  });

});


