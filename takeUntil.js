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

const assertArraysEqual = (actual, expected) => {
  return eqArrays(actual, expected) ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};

// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
const takeUntil = (array, callback) => {
  const results = [];
  for (let x of array) {
    if (callback(x) === false) {
      results.push(x);
    } else {
      break; // stops function when callback function's result returns true
    }
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
