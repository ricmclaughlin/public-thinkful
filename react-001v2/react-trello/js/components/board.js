import React from 'react';
import ReactDOM from 'react-dom';

import List from './list';

export default function Board(props) {
  let lists = [];

  for (var i = 0; i < 3; i++) {
    lists.push(<List />);
  }

  return (
    <board>
      {lists}
    </board>  
  );
}
