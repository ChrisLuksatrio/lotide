// Takes in two arrays and returns VALUE of true/false based on match
const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
  value = true;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      value = false;
    }
  }
  return value;
  }
};

// Displays appropriate MESSAGE if actual is equal to expected
const assertArraysEqual = (actual, expected) => {
  return eqArrays(actual, expected) ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};

// Actual Function - removes multiple objects within an array and RETURNS NEW ARRAY

const without = (source, itemsToRemove) => {
  let newarr = [];
  for (i = 0; i < source.length; i++) {
    var shouldDelete = itemsToRemove.includes(source[i]); // includes returns if true or not if value is within loop
    if (shouldDelete === false) {
      newarr.push(source[i]);
    }
  }
  return newarr;
}

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

