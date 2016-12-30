'use strict';

console.log(foo);

// note #2
example();

function example() {
  var willIBeDefined = 'Yes I am defined';
  console.log('I can run sort of....!');
  console.log(foo);
  console.log(willIBeDefined);
}

// note #1
var foo = 'foo';

// note #1
// this should be defined before it is used... 
// and will cause a non-trapable runtime condition

// note #2
// it is really bad form to call functions in a source file
// before they are defined... unpredictable things happen