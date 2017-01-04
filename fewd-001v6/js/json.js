'use strict';

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

