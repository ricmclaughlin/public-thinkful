import React from 'react';
import ReactDOM from 'react-dom';

import List from './list';

export default function Board(props) {
  let cards = [
    {
      text:"A card title",
      description:"a most excellent description"
    },
    {
      text:"A card title",
      description:"a most excellent description"
    },
    {
      text:"A card title",
      description:"a most excellent description"
    }
  ];

  let lists = [];

  for (var i = 0; i < 3; i++) {
    lists.push(<List cards={cards} rowTitle={props.rowTitles[i]} title={props.rowTitle}key={i}/>);
  }

  return (
    <div>
      <header className="yeller">
        <div className="row">
          <div className="col-12">
            <h1>{props.boardTitle}</h1>
            <h5>An Incomplete List</h5>
          </div>
        </div>  
      </header>
      <h1></h1>
      {lists}
    </div>  
  );
}
