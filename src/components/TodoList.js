import React, { Component } from 'react';
import './Todo.css';

import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <ul className='todo-list'>
        {
          this.props.todos.map((item, index) => (
            <TodoItem
              key={index} no={item.no} checked={item.checked} text={item.text}
              />
          ))
        }
      </ul>
    );
  }
}
