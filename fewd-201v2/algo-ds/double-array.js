// Doubles every value in an array
var doubleArray = function(array) {
  for (var i = 0; i < array.length; i++) { // O(n)
    array[i] = array[i] * 2;
  }
  return array;
};

console.log(doubleArray([1, 2, 3, 4])); // out put 4 characters
