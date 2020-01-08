const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
/* const eqObjects = function(object1, object2) {
  let arrVal1 = Object.keys(object1); // turns object into array containing keys
  let arrVal2 = Object.keys(object2);
  value = false;
  if (arrVal1.length === arrVal2.length) {
    for (i = 0; i < arrVal1.length; i++) {
      if (object1[arrVal1[i]] === object2[arrVal2[i]]) { // if key's value is equal to other obj's key's value, return true
        value = true;
      }
    }
  }
  console.log(value);
}; */


const eqObjects = function(object1, object2) {
  let arrVal1 = Object.keys(object1); // turns object into array containing keys
  let arrVal2 = Object.keys(object2);
  value = false;
  if (eqArrays(arrVal1, arrVal2)) {
    for (i = 0; i < arrVal1.length; i++) {
      if (object1[arrVal1[i]] === object2[arrVal2[i]]) { // if key's value is equal to other obj's key's value, return true
        value = true;
      }
    }
  }
  console.log(value);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false