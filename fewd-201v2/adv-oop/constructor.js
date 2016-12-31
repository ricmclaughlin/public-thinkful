'use strict';

// notice caps for names of "classes"
// and use of function expression
var Pet = function (name, type) {
  this.name = name;
  this.type = type;
  console.log('Hi, my name is ' + name + ' and I am a ' + type + '.');
}

var fluffy = new Pet('Fluffy', 'cat');
var ralph = new Pet('Ralph', 'horse');

// pets like to run... let's make the Pet do that...

Pet.prototype.run = function(length) {
  console.log('Hi, my name is ' + this.name + ' and I just ran a ' + length + ' steps.'); 
}

// now make ralph run
ralph.run(4);

// crap! but how do we make a cat make a different sound than a horse?
// make a new specialized version of Pet... Cat & Horse

var Cat = function(name) {
  Pet.call(this, name, 'cat');
}

Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function(){
  console.log('Hi, my name is ' + this.name + '... meow ' + '.');
}

var Horse = function(name) {
  Pet.call(this, name, 'horse');
}

Horse.prototype = Object.create(Pet.prototype);
Horse.prototype.constructor = Horse;

Horse.prototype.neigh = function(){
  console.log('Hi, my name is ' + this.name + '... neigh ' + '.');
}

ralph = new Horse('Ralph');
ralph.neigh();
fluffy = new Cat('Fluffy');
fluffy.meow();