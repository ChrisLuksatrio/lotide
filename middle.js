// ACTUAL FUNCTION
// Takes array and returns VALUE of middle-most element of array
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
  return value;
}

module.exports = middle;

