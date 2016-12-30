import React from 'react';
import ReactDOM from 'react-dom';

import Person from './person';

export default function PersonList() {
  
  return (
    <div className="person-list">
      <Person name='Donald Knuth'
        imageURL='http://www.gravatar.com/avatar/?d=identicon'
        job='Clever chap' />

      <Person
        name='Derek Zoolander'
        imageURL='https://scontent.cdninstagram.com/t51.2885-19/11377856_626372960798542_1396263462_a.jpg'
        job='Male model'
      />
    </div>
  );
}