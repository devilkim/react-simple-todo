import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {text: 'item1', checked: false},
      {text: 'item2', checked: false},
      {text: 'item3', checked: false}
    ]
  }

  handleClickAddButton() {
    const inputText = this.refs.inputText.value;
    this.refs.inputText.value = '';

    if (inputText === '') {
      alert('You must write todo at least 1 character.');
      return;
    }

    const array = [...this.state.todos, {text: inputText, checked: false}];
    this.setState({todos: [...array]});
  }

  handleChangeTodoItem(index) {
    const array = [...this.state.todos];
    array[index].checked = !array[index].checked;
    this.setState({todos: [...array]});
  }

  handleClickRemoveButton(index) {
    const array = [...this.state.todos];
    array.splice(index, 1);
    this.setState({todos: [...array]});
  }

  render() {
    return (
      <div className='container'>
        <h1>React Simple Todo App</h1>
        <div className='todo-input-text'>
          <input type='text' ref='inputText' />
          <button type='button' onClick={this.handleClickAddButton.bind(this)}>Add</button>
        </div>
        <ul className='todo-list'>
          {
            this.state.todos.map((item, index) => (
                <li key={index}>
                  <input type='checkbox'
                    checked={item.checked}
                    onChange={this.handleChangeTodoItem.bind(this, index)}/>
                  {item.text}
                  <button type='button' onClick={this.handleClickRemoveButton.bind(this, index)}>Remove</button>
                </li>
            ))
          }
        </ul>
        <button type='button' onClick={() => {console.log(this.state);}}>Print state</button>
      </div>
    );
  }
}

export default App;
