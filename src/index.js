// Developer TODO: add application entry point
import React from 'react';
import ReactDOM from 'react-dom'; //need this so Reat can manipulate the DOM
import ToDo from './App';
import './index.css';

let items = [
  "Learn react",
  "Get Mix-express working",
  "Learn computer sci"
]

ReactDOM.render(
  <ToDo
  items={items} />,
  document.getElementById('root') //can use this multiple times to point to diff parts of the file or 1 part specifically, like a div
);
