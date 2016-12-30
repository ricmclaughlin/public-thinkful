import React from 'react';
import ReactDOM from 'react-dom';

export default function Card(props) {
  return (
    <div className="box">
      <img src="http://placehold.it/400x400" alt="kitten"/>
      <footer>
        <h2>{props.text}</h2>
        <p>{props.description}</p>
      </footer>
    </div>
  );
}
