import React, { Component } from 'react';
import '../App.css';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
        <input type='checkbox'
          checked={this.props.checked}
          onChange={() => {
            this.props.onChangeTodoItem(this.props.index, !this.props.checked);
          }}
          />
        {this.props.text}
        <button type='button' onClick={() => {
          this.props.onClickRemoveButton(this.props.index);
        }}>Remove</button>
      </li>
    );
  }
}

TodoItem.defaultProps = {
  onChangeTodoItem: () => {},
  onClickRemoveButton: () => {}
}
