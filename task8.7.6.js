let arr = [1, 1, 1, 1, 1];

function isEqual(element) {
  return element === arr[0];
}

console.log( arr.every(isEqual));