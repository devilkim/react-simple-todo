import { createAction, handleActions } from 'redux-actions';
import { Map, List, Record } from 'immutable';

const ADD_TODO = 'todo/ADD_TODO';
const CHECK_TODO = 'todo/CHECK_TODO';
const REMOVE_TODO = 'todo/REMOVE_TODO';

export const addTodo = createAction(ADD_TODO);
export const checkTodo = createAction(CHECK_TODO);
export const removeTodo = createAction(REMOVE_TODO);

const TodoItem = Record({
  text: 'Default Text', checked: false
});

const initialState = Map({
  items: List([TodoItem({text: 'Sample Text1'}), TodoItem({text: 'Sample Text2'})])
});

export default handleActions({
  [ADD_TODO]: (state, {type, payload}) => {
    return state.set('items', state.get('items').push(TodoItem({text: payload.text})));
  },
  [CHECK_TODO]: (state, {type, payload}) => {
    return state.set('items', state.get('items').setIn([payload.index, 'checked'], payload.checked));
    /*
    const array = [...this.state.todos];
    array[index].checked = checked;
    this.setState({todos: [...array]});
    */
  },
  [REMOVE_TODO]: (state, {type, payload}) => {
    return state.set('items', state.get('items').delete(payload.index));
  }
}, initialState);
