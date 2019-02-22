import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/TodoApp';

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoApp title='React Simple Todo App1' />
      </div>
    );
  }
}
