var findNthElement = function(array, n) {
  if (array.length == 1) { // O(1)
    return array[n];
  }

  var middle = Math.floor(array.length / 2); // O(1)
  if (n < middle) { // O(1)
    return findNthElement(array.slice(0, middle), n);
  }
  else {
    return findNthElement(array.slice(middle, array.length), n - middle);
  }
};

// answer: O(1)
console.log(findNthElement([1, 2, 3, 4, 5, 6], 4));
console.log(findNthElement([1, 2, 3, 4, 5, 6], 1));


// Find a series of elements from an array
var findElements = function(array, toFind) {
    var elements = []; // O(1)
    for (var i = 0; i < toFind.length; i++) { // O(n)
        var element = findNthElement(array, toFind[i]);
        console.log(element);
        elements.push(element);
    }
    return elements;
};

console.log(findElements([1, 2, 3, 4, 5, 6], [3] ));
console.log(findElements([1, 2, 3, 4, 5, 6, 7, 8], [3, 6] ));