'use strict';

//the basic for loop
var countTo = 10;
for (var i = 1; i <= countTo; i++) {
  console.log('a basic for loop counter: ' + i);
}

// how you actually use for loops in real life
var nums = [26, 25, 56];
for (var i = 0; i <= nums.length - 1; i++) {
  console.log('processing an array: ' + nums[i]);
}

// a while loops 
var counter = 1;
countTo = 10;
while (counter <= countTo) {
  console.log('while counter: ' + counter);
  counter++;
}

counter = 1;
countTo = 10;
// do while loops might
do {
  console.log('do while counter: ' + counter);
  counter++;
} while (counter <= countTo)

// why are there both kinds?
// case: might not need to loop at all
counter = 1;
var countToThatMightBeAnyNumber = 1;
while (counter < countToThatMightBeAnyNumber) {
  console.log('did this ever run? ' + counter);
  counter++;
}

// case: must run at least once

counter = 1;
countToThatMightBeAnyNumber = -6;
do {
  console.log('Times the do-while loop ran: ' + counter);
  counter++;
} while (counter <= countToThatMightBeAnyNumber)