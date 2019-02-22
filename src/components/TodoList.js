import React, { Component } from 'react';
import '../App.css';

import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <ul className='todo-list'>
        {
          this.props.todos.map((item, index) => (
            <TodoItem
              key={index} index={index} checked={item.checked} text={item.text}
              />
          ))
        }
      </ul>
    );
  }
}
