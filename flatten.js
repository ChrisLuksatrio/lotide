
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
  return eqArrays = (actual, expected) === expected ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};

// Actual Function

const flatten = arr => {
  newarr = [];
  for (i = 0; i < arr.length; i++) {
    if (!(Array.isArray(arr[i]))) {
      newarr.push(arr[i]);
    } else {
      for (j = 0; j < arr[i].length; j++) {
        newarr.push(arr[i][j]);
      }
    }
  }
  console.log(newarr);
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
