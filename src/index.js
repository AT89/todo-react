// Developer TODO: add application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './App';
import './index.css';

const toDoData = {
  unfinished: ["Take out trash", "study ReactJS", "Study Aurelia", "get slick.js working"],
  finished: ["poop"]
}


ReactDOM.render(
  <ToDo
  notfinitems={toDoData.unfinished}
  finitems={toDoData.finished} />,
  document.getElementById('root')
);
