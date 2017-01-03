import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card';

export default function List(props) {
  let cardsHTML = [];
  
  for (var i = 0; i < 3; i++) {
    cardsHTML.push(
      <div className="col-4" key={i}>
        <Card key={i} 
          rowTitle={props.rowTitle} 
          text={props.cards[i].text + i} 
          description={props.cards[i].text + i}
        />
      </div>
    );
  }

  return (
    <row key={props.id}>
      <div className="row">
        <div className="col-3l">
          <h2 className="row-header">{props.rowTitle}</h2>
        </div>
        <div className="col-3">
          <form className="row-header-form">
            <input onChange={props.inputHandler} type="text" placeholder="add a card"/>
            <button onClick={props.buttonClickHandler}>Add card</button>
          </form>
        </div>
      </div>
      <div className="row">
        {cardsHTML}
      </div>  
    </row>
  );
}

