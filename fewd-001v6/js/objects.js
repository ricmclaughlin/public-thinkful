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
