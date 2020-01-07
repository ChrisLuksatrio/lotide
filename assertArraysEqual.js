const eqArrays = (arr1, arr2) => {
  value = true;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      value = false;
    }
  }
  return value;
};

const assertArraysEqual = (actual, expected) => {
  return actual === expected ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => false