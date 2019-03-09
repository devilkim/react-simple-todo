import React, { Component } from 'react';
import axios from 'axios';
import { TodoActions } from '../store/actionCreators';
import './Todo.css';

export default class TodoItem extends Component {
  checkTodo = async (no) => {
    const result = await axios.put('http://localhost:9191/todo/' + no + '/checked');
    if (result.data.isSuccess) {
      TodoActions.checkTodo({no: no, checked: result.data.checked});
    }
  }
  removeTodo = async (no) => {
    const result = await axios.delete('http://localhost:9191/todo/' + no);
    if (result.data.isSuccess) {
      TodoActions.removeTodo({no: no});
    }
  }
  render() {
    return (
      <li>
        <input type='checkbox'
          checked={this.props.checked}
          onChange={() => {
            this.checkTodo(this.props.no);
          }}
        />
        {this.props.text}
        <button type='button'
          onClick={() => {
            this.removeTodo(this.props.no);
          }}
        >Remove</button>
      </li>
    );
  }
}
