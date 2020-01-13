const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};

// which takes in an object and a callback. 
// It should scan the object and return the first key for which the callback returns a truthy value. 
// If no key is found, then it should return undefined.

const findKey = (obj, callback) => {
  let key = "";
  const objArray = Object.keys(obj);
  for (x of objArray) {
    if (callback(obj[x])) {
      key = x;
      break
    }
  }
  return key;
}

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

module.exports = findKey;


//when dealing with Objects, you need to convert the object into an array of keys to loop into it
// use a for loop to loop through and use the array's keys to access the object's nexted object