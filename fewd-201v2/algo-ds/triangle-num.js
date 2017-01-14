var triangleNumbers = function(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return triangleNumbers(n - 1) + triangleNumbers(n - 1) - triangleNumbers(n - 2) + 1;
};

console.log(triangleNumbers(2));
console.log(triangleNumbers(3));
console.log(triangleNumbers(4));
console.log(triangleNumbers(5));
console.log(triangleNumbers(12));

// O(1)