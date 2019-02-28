import React, { Component } from 'react';
import './Todo.css';

export default class TodoInputArea extends Component {
  clearInputText() {
    this.refs.inputText.value = '';
  }
  render() {
    return (
      <div className='todo-input-text'>
        <input type='text' ref='inputText' />
        <button type='button' onClick={() => {
          const inputText = this.refs.inputText.value;
          this.props.onClickAddButton(inputText);
        }}>Add</button>
      </div>
    );
  }
}

TodoInputArea.defaultProps = {
  onClickAddButton: () => {}
}
