'use strict';

// function canNotNOTuseVar() {
//   variable = 1;
// }

// canNotNOTuseVar();

// global variables are not allowed
//globalVar = 'this is not allowed using strict mode';

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
//won't work
//console.log(insideFunctionOutsideBlock);