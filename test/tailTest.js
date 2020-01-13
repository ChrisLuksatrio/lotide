const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail", () => {
  it("returns 2", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    
    assert.strictEqual(tail(words).length, 2);
  });

});











