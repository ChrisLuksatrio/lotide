// TEST/ASSERTION FUNCTIONS

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
  return actual === expected ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};



// ACTUAL FUNCTION
// Takes array and returns VALUE of middle-most element of array
const middle = arr => {
  value = [];
  const midIndex = Math.floor(arr.length/2);
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      value.push(arr[midIndex - 1], arr[midIndex]);
    } else {
      value.push(arr[midIndex]);
    }
  } 
  return value;
}

// TEST CODE

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);


