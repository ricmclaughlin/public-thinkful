// Returns whether a number is odd or even
var isOdd = function(number) { // O(1)
    var remainder = number % 2; 
    return remainder == 1;
};


console.log(isOdd(13));