// Developer TODO: add App component
import React, { Component } from 'react';
import './App.css';

class ToDo extends Component {

render() {

    return (
      <div>
      <h1>TO DO LIST</h1>
        <ul>
          {this.props.items.map( item => {
            return <li>{item}</li>
          })}
        </ul>

      </div>
    )




  }
}
export default ToDo;
