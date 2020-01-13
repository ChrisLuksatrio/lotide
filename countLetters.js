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
  return obj;
}

module.exports = countLetters;

