const assertArraysEqual = (arr1, arr2) => {
  value = true;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      value = false;
    }
  };
  return value === true ? console.log(`✅✅✅ Asserstion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${arr1} !== ${arr2}`);
};


assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false