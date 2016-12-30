import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card';

export default function List(props) {
  let cardsHTML = [];
  
  for (var i = 0; i < 3; i++) {
    cardsHTML.push(<div className="col-4" key={i}><Card key={i} rowTitle={props.rowTitle} text={props.cards[i].text + i} description={props.cards[i].text + i}/></div>);
  }

  return (
    <div key={props.id} className="row">
      {cardsHTML}
    </div>  
  );
}
