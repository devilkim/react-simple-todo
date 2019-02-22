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

  onClickAddButton() {
    const input_text = this.refs.input_text.value;
    this.refs.input_text.value = '';

    if (input_text === '') {
      alert('You must write todo at least 1 character.');
      return;
    }

    const array = [...this.state.todos, {text: input_text, checked: false}];
    this.setState({todos: [...array]});
  }

  onChangeTodoItem(index) {
    const array = [...this.state.todos];
    array[index].checked = !array[index].checked;
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
        <h1>React Simple Todo App</h1>
        <div className='todo-input-text'>
          <input type='text' ref='input_text' />
          <button type='button' onClick={this.onClickAddButton.bind(this)}>Add</button>
        </div>
        <ul className='todo-list'>
          {
            this.state.todos.map((item, index) => (
                <li key={index}>
                  <input type='checkbox'
                    checked={item.checked}
                    onChange={this.onChangeTodoItem.bind(this, index)}/>
                  {item.text}
                  <button type='button' onClick={this.onClickRemoveButton.bind(this, index)}>Remove</button>
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
