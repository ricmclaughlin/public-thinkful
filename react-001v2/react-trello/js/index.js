require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

const boardTitle = 'A Trello Style Board';
const rowTitles = [
  'Row 1',
  'Row 2',
  'Row 3'
];

document.addEventListener('DOMContentLoaded', () => 
  ReactDOM.render(<Board boardTitle={boardTitle} rowTitles={rowTitles}/>, document.getElementById('app'))
);
