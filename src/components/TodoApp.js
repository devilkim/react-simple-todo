import React, { Component } from 'react';
import '../App.css';

import TodoInputArea from './TodoInputArea';
import TodoList from './TodoList';

export default class TodoApp extends Component {
  state = {
    todos: [
      {text: 'item1', checked: false},
      {text: 'item2', checked: false},
      {text: 'item3', checked: false}
    ]
  }

  addTodoItem(inputText) {
    if (inputText === '') {
      alert('You must write todo at least 1 character.');
      return;
    }
    const array = [...this.state.todos, {text: inputText, checked: false}];
    this.setState({todos: [...array]});
    this.refs.todoInputArea.clearInputText();
  }

  changeTodoItem(index, checked) {
    const array = [...this.state.todos];
    array[index].checked = checked;
    this.setState({todos: [...array]});
  }

  onClickRemoveButton(index) {
    const array = [...this.state.todos];
    array.splice(index, 1);
    this.setState({todos: [...array]});
  }

  render() {
    return (
      <div className='container'>
        <h1>{this.props.title}</h1>
        <TodoInputArea ref="todoInputArea" onClickAddButton={this.addTodoItem.bind(this)} />
        <TodoList
          todos={this.state.todos}
          onChangeTodoItem={this.changeTodoItem.bind(this)}
          onClickRemoveButton={this.onClickRemoveButton.bind(this)}/>
        <button type='button' onClick={() => {console.log(this.state);}}>Print state</button>
      </div>
    );
  }
}

TodoApp.defaultProps = {
  title: 'Todo'
}
