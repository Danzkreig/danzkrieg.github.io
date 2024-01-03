const array = [1, -2, 3, 4, -1, 2, 1, -5, 4];
function findMaxSum(arr) {
  temp = [];
  max = 0;
  sum = 0;
  /* this is hot garbage, there has gotta be a better way of parsing this array */ for (
    i = 0;
    i < arr.length;
    i++
  ) {
    for (j = 0; j < arr.length; j++) {
      sum = 0;
      fart = arr.slice(i, j);
      for (let k = 0; k < fart.length; k++) {
        sum += fart[k];
      }
      if (sum > max) {
        max = sum;
        temp = fart;
      }
    }
  }
  return max + "    // " + temp;
}
console.log(findMaxSum(array));
