// define an object

var zeppelin = {
  singer: 'Robert Plant',
  guitar: 'Jimmy Page',
  bass: 'John Paul Jones',
  drums: 'Jon Bonham' 
};

// access value using dot notation
console.log(zeppelin.singer);

// access value using bracket notation
console.log(zeppelin['singer']);

// add a value using dot notation
zeppelin.bestAlbum = 'Houses of the Holy';

// add value using bracket notation
zeppelin['worstAlbum'] = 'The Song Remains the Same';

// add a function to the object and use the this keyword to access
// data in the object
zeppelin.sayBestAlbum = function() {
  console.log('The best Led Zeppelin album is ' + this.bestAlbum)
}

// now delete a key
delete zeppelin.worstAlbum;

// add an integer value to the object, increment it and log it
zeppelin.albums = 9;
zeppelin.albums = ++zeppelin.albums;
console.log(zeppelin.albums);
console.log(zeppelin);

// data types in objects
var boolean = {
  "value": true
};

var objectsCanContainNull = {
  "value": null
};

var numInObject = { 
  "age": 30 
};

var myPeeps = {
  "employees":[ "John", "Anna", "Peter" ]
};

var anEmployee = {
  "employee": { 
    "name":"John", 
    "age":30, 
    "city":"New York"
  }
};

// access objects inside objects using 
// dot notation
console.log(anEmployee.employee);
console.log(anEmployee.employee.name);

// or [] notation
console.log(anEmployee['employee']);
console.log(anEmployee['employee']['name']);

// a peak at JSON...

var zeppelin = {
  singer: 'Robert Plant',
  guitar: 'Jimmy Page',
  bass: 'John Paul Jones',
  drums: 'Jon Bonham' 
};

var beatles = {
  bass: 'Paul',
  guitar: 'John',
  lead: 'George',
  drums: 'ringo', // a trailing comma is ok (some even like it)
}

var greatBands = { bands: [zeppelin, beatles]};

// printing out objects is pretty easy... 
console.log('This is ugly json:\n' + JSON.stringify(greatBands) + '\n');
// printing out objects PRETTY is easy too
console.log('this is pretty json:\n' + JSON.stringify(greatBands, null, 2))

console.log(greatBands.bands[1].drums);





