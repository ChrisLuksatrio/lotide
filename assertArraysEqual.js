const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  return eqArrays(actual, expected) ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};


// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false


module.exports = assertArraysEqual;

