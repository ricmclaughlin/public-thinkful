import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card';

export default function List(props) {
  let cards = [];

  for (var i = 0; i < 3; i++) {
    cards.push(<div className="col-4"><Card text="A card title" description=""/></div>);
  }

  return (
    <div className="row">
      {cards}  
    </div>  
  );
}
