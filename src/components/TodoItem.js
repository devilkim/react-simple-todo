import React, { Component } from 'react';
import { TodoActions } from '../store/actionCreators';
import './Todo.css';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
        <input type='checkbox'
          checked={this.props.checked}
          onChange={() => {
            TodoActions.checkTodo(this.props.no);
          }}
        />
        {this.props.text}
        <button type='button'
          onClick={() => {
            TodoActions.removeTodo(this.props.no);
          }}
        >Remove</button>
      </li>
    );
  }
}
