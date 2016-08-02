// Developer TODO: add App component
import React, { Component } from 'react';
import './App.css';

class ToDo extends Component {

render() {

    return (
      <div>
      <h1>TO DO LIST</h1>

      <div id="new">
      </div>

      <div id="notfin">
      <h2>Unfinished</h2>
        <div id="notfinitems">
        <ul>{this.props.notfinitems}</ul>
        </div>
      </div>


      <div id="fin">
      <h2>Finished</h2>
        <div id="finitems">
        <ul>{this.props.finitems}</ul>
        </div>
      </div>
      </div>
    )

  }
}
export default ToDo;
