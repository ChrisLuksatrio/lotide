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

// Actual Function

const letterPositions = sentence => {
  const results = {};
  const newStr = sentence.split('');
  for (i = 0; i < newStr.length; i++) {
    if (results[newStr[i]]) {
      results[newStr[i]].push(i);
    } else {
      results[newStr[i]] = [i];
    }
  }
  return results
};



assertArraysEqual(letterPositions('hello'), true)


