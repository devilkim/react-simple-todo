import React, { Component } from 'react';
import { TodoActions } from '../store/actionCreators';
import '../App.css';

export default class TodoInputArea extends Component {
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
          TodoActions.addTodo({text: inputText});
        }}>Add</button>
      </div>
    );
  }
}
