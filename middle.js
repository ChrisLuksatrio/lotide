// TEST/ASSERTION FUNCTIONS

const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};



// ACTUAL FUNCTION
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
  console.log(value);
}

// TEST CODE

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


// distinguish if arr only has 1 or 2 objects, return empty arr

/* const noSpaces = str.toLowerCase().split(" ").join(""); // removes spaces in the string
const midIndex = Math.floor(noSpaces.length/2); //calculates mid of str's length
const lastIndex = noSpaces.length - 1;  */