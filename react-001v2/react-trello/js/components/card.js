import React from 'react';
import ReactDOM from 'react-dom';

export default function Card(props) {
  return (
    <div className="box tooltip">
      <span className="tooltiptext">{props.rowTitle}</span>
      <img src="http://lorempixel.com/400/400/" alt="kitten"/>
      <footer>
        <h2>{props.text}</h2>
        <p>{props.description}</p>
      </footer>
    </div>
  );
}
