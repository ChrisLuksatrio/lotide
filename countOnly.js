const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// what it does is i fit has key has no value, add value. Else, make value 1
const countOnly = (allItems, itemsToCount) => {
  results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
        if (results[item]) {
        results[item] += 1
      } else {
        results[item] = 1
      }
    }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
