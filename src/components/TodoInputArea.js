import React, { Component } from 'react';
import '../App.css';

export default class TodoInputArea extends Component {

  render() {
    return (
      <div className='todo-input-text'>
        <input type='text' ref='input_text' />
        <button type='button' onClick={() => {
          const input_text = this.refs.input_text.value;
          this.props.onClickAddButton(input_text);
        }}>Add</button>
      </div>
    );
  }
}

TodoInputArea.defaultProps = {
  onClickAddButton: () => {}  
}
