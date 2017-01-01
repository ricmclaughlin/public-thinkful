'use strict';

// scenario 1:global variables are not allowed using 'use strict'
globalVar = 'this is not allowed using strict mode';

// scenario 2: variables defined in a function are 
// out of scope OUTSIDE of the function
function canNotNOTuseVar() {
  variable = 1;
}

canNotNOTuseVar();

// Scenario 3: variables from outside function will work within
// Scenario 4: variables defined inside functions work inside block
// scenario 5: variables defined inside block workout outside of block 
// (there is no idea of block level scope in ES5)

var outside = 'a variable defined outside a function works inside a function';

function example() {
  var insideFunctionOutsideBlock = 'a variable defined inside a function works inside a block';
  
  console.log(outside);
  
  for (var i = 0; i <= 2; i++) {
    var insideBlock = 'a variable defined inside a block works outside a block';
    console.log(insideFunctionOutsideBlock);
  }
  
  console.log(insideBlock)
}

example();
