'use strict';

//////////////////////////
// use an array for stack (LIFO)
//////////////////////////
var stack = ['gray', 'lightblue', 'gray', 'gray'];

// let the next person go ahead of you and get a gray trey
console.log ('Little Bobby got a ' + stack.pop() + ' colored tray!');


//////////////////////////
// use an array for queue (FIFO)
//////////////////////////
var queue = ['bob (customer 1)', 'alice (customer 2)' ];

// add another customer
queue.push('Bobby Sue (customer 3)');


//////////////////////////
// use an array to store an ordered list
//////////////////////////
var shopping list = ['banana', 'beer', 'beer', 'baby formula'];


//////////////////////////
//use json to store complex data types
//////////////////////////

var myStuff = {
  "employee":{ "name":"John", "age":30, "city":"New York" },
  "customers": [
    { name: 'bob', product: 'coke'},
    { name: 'alice', product: 'beer'},
    { name: 'gunter', product: 'bier'},   
  ] 
}

//////////////////////////
// don't use an object to store numbered keys
//////////////////////////

// bad
var myObjectThatShouldBeAnArray = {
  1: 'cat',
  2: 'dog'
};

//good
var myArray = ['cat', 'dog'];
