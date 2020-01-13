// const assertEqual = function(actual, expected) {
//   return actual === expected ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
// };

const findKeyByValue = (obj, value) => {
  let key = "";
  let arr = Object.keys(obj); // turns the object into an array containing keys(genres)
  for (i = 0; i < arr.length; i++) {  // loops through array
    if (obj[arr[i]] === value) { // now that we can loop through object's keys, we can obtain the key's value (Series Name). 
      key = arr[i]; // if iteration of series name is equal to value, print out key
    } else {
      key = undefined;
    }
  }
  return key;
}

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;



