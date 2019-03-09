import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { TodoActions } from '../store/actionCreators';
import './Todo.css';

import TodoInputArea from './TodoInputArea';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.loadTodoList();
  }
  loadTodoList = async () => {
    const result = await axios.get('http://localhost:9191/todos');
    TodoActions.todoList(result.data.list);
  }
  render() {
    return (
      <div className='container'>
        <h1>{this.props.title}</h1>
        <TodoInputArea />
        <TodoList
          todos={this.props.todo.items} />
        <button type='button' onClick={() => {console.log(this.props.todo);}}>Print state</button>
      </div>
    );
  }
}

TodoApp.defaultProps = {
  title: 'Todo'
}

export default connect((state) => ({
  todo: state.todo.toJS()
}))(TodoApp);
