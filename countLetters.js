const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Asserstion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Asserstion Failed: ${actual} !== ${expected}`);
};

const countLetters = str => {
  const obj = {};
  const strNew = str.split('')
  for (i of strNew) {
    if (obj[i]) {
      obj[i] += 1
    } else {
      obj[i] = 1
    }
  }
  console.log(obj);
}

countLetters("LHL");

