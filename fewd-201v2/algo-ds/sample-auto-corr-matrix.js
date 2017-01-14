// Calculates the sample autocorrelation matrix (i.e. the matrix found by
// multiplying every item in an array with every other item)
var sampleAutocorrelationMatrix = function(array) {
  var matrix = [];
  for (var i = 0; i < array.length; i++) {
    var row = [];
    for (var j = 0; j < array.length; j++) {
      row.push(array[i] * array[j]);
    }
    matrix.push(row);
  }
  return matrix;
};
console.log(sampleAutocorrelationMatrix([1])); // 1 = 1^1
console.log(sampleAutocorrelationMatrix([1, 2])); // 4 = 2^2
console.log(sampleAutocorrelationMatrix([1, 2, 3])); // 9 = 3^2
console.log(sampleAutocorrelationMatrix([1, 2, 3, 4])); // 16 = 4^2
console.log(sampleAutocorrelationMatrix([1, 2, 3, 4, 5])); // 25 = 5^2
console.log(sampleAutocorrelationMatrix([1, 2, 3, 4, 5, 6])); // 36 = 6^2

// so O(n^2) or expotential