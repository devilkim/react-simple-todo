import React, { Component } from 'react';
import axios from 'axios';
import { TodoActions } from '../store/actionCreators';
import { host } from '../config.json';
import './Todo.css';

export default class TodoInputArea extends Component {
  addTodo = async (text) => {
    const result = await axios.post(host + '/todo', {text});
    const no = result.data.no;
    TodoActions.addTodo({no, text});
  }
  render() {
    return (
      <div className='todo-input-text'>
        <input type='text' ref='inputText' />
        <button type='button' onClick={() => {
          const inputText = this.refs.inputText.value;
          if (inputText === '') {
            alert('You must write todo at least 1 character.');
            return;
          }
          this.refs.inputText.value = '';
          this.addTodo(inputText);
        }}>Add</button>
      </div>
    );
  }
}
