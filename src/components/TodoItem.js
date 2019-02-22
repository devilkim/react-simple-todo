import React, { Component } from 'react';
import { TodoActions } from '../store/actionCreators';
import '../App.css';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
        <input type='checkbox'
          checked={this.props.checked}
          onChange={() => {          
            TodoActions.checkTodo({index: this.props.index, checked: !this.props.checked});
          }}
          />
        {this.props.text}
        <button type='button' onClick={() => {
          TodoActions.removeTodo({index: this.props.index});
        }}>Remove</button>
      </li>
    );
  }
}
