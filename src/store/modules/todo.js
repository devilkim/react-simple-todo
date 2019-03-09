import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';

const TODO_LIST = 'todo/TODO_LIST';
const ADD_TODO = 'todo/ADD_TODO';
const CHECK_TODO = 'todo/CHECK_TODO';
const REMOVE_TODO = 'todo/REMOVE_TODO';

export const todoList = createAction(TODO_LIST);
export const addTodo = createAction(ADD_TODO);
export const checkTodo = createAction(CHECK_TODO);
export const removeTodo = createAction(REMOVE_TODO);

const initialState = Map({
  items: List([])
});

export default handleActions({
  [TODO_LIST]: (state, {type, payload}) => {
    return state.set('items', fromJS(payload));
  },
  [ADD_TODO]: (state, {type, payload}) => {
    return state.set('items', state.get('items').push(Map({no: payload.no, checked: false, text: payload.text})));
  },
  [CHECK_TODO]: (state, {type, payload}) => {
    return state.updateIn(['items'], items => {
      const index = items.findIndex(item => item.get('no') === payload.no);
      return items.setIn([index, 'checked'], payload.checked);
    });
  },
  [REMOVE_TODO]: (state, {type, payload}) => {
    return state.updateIn(['items'], items => {
      const index = items.findIndex(item => item.get('no') === payload.no);
      return items.delete(index);
    });
  }
}, initialState);
