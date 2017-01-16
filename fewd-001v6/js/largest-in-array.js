function largestInArray(arr) {
  var largestElement = 0;
  for (var x = 0; x < arr.length; x++) {
    largestElement = (largestElement < parseInt(arr[x])) ? parseInt(arr[x]) : largestElement;
  }
  return largestElement;
}

console.log(largestInArray([3, 0, 9, 12, 4])); // 12

function largestOfFour(arr) {
  var largest = [];
  var elLarge;
  for (var i = 0; i < arr.length; i++) {
    elLarge = 0;
    for (var x = 0; x < 4; x++) {
      elLarge = (elLarge < parseInt(arr[i][x])) ? parseInt(arr[i][x]) : elLarge;
    }
    largest[i] = elLarge;
  }

  return largest;
}

console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])); //[9, 35, 97, 1000000]
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //[27,5,39,1001]