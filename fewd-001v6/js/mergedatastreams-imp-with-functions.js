// imperative programming only

'use strict';
var _ = require ('lodash');

function mergeDataStreams(stream1, stream2) {
  for (var j = 0; j < stream1.length; j++) {
    for (var i = 0; i < stream2.length; i++) {
      if (stream2[i].id === stream1[j].id) {
        for (var stream2Keys in stream2[i]) {
          stream1[j][stream2Keys] = stream2[i][stream2Keys]
        }
      }
    }
  }
  return stream1;
}

// data
var dataSource1 = [
    {
      id: '0',
      firstName: 'Juan',
      lastName: 'Doe',
      age: 32
    },
    {
      id: '1',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 31
    },
    {
      id: '2',
      firstName: 'Janice',
      lastName: 'Doe',
      age: 30
    },
    {
      id: '3',
      firstName: 'Jake',
      lastName: 'Doe',
      age: 29
    },
  ];

var dataSource2 = [
    {
      id: '0',
      occupation: 'architect',
      address: {
        street: '123 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '1',
      occupation: 'architect',
      address: {
        street: '234 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '2',
      occupation: 'architect',
      address: {
        street: '345 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '3',
      occupation: 'architect',
      address: {
        street: '456 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
  ];
/* From here down, you are not expected to 
   understand.... for now :)  
    Nothing to see here!
*/

// tests 
function testMergeDataStreams(stream1, stream2) {
  var expected = stream1.map(function(item) {
   return _.assign(
     _.clone(item), stream2.find(function(item2) {return item.id === item2.id;}));
  });
  
  var actual = mergeDataStreams(stream1, stream2);
  
  var passing = actual && expected.map(function(item) {
    return _.isEqual(
      item,
      actual.find(function(_item) {return _item.id === item.id; })
    );
  }).every(function(result) {return result;} );
  
  if (passing) {
    console.log('SUCCESS! mergeDataStreams works');
  }
  
  else {
    console.log('FAILURE! mergeDataStreams not working');
  }
}

testMergeDataStreams(dataSource1, dataSource2);