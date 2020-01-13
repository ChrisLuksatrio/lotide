// const eqArrays = (arr1, arr2) => {
//   if (arr1.length === arr2.length) {
//   value = true;
//   for (i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       value = false;
//     }
//   }
//   return value;
//   }
// };

// const assertArraysEqual = (actual, expected) => {
//   return eqArrays(actual, expected) ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
// };

// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


// // const results1 = map(words, word => word);
// const results1 = map(words, word => word.length);
// // const results1 = map(words, word => word + "ay");


// console.log(results1);

module.exports = map;

