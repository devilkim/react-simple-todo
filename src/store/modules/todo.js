import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import axios from 'axios';
import { host } from '../../config.json';

const TODO_LIST = 'todo/TODO_LIST';
const ADD_TODO = 'todo/ADD_TODO';
const CHECK_TODO = 'todo/CHECK_TODO';
const REMOVE_TODO = 'todo/REMOVE_TODO';

export const todoList = () => async dispatch => {
  const result = await axios.get(host + '/todos');
  dispatch({type: TODO_LIST, payload: result.data.list})
};
export const addTodo = (text) => async dispatch => {
  const result = await axios.post(host + '/todo', {text});
  const no = result.data.no;
  dispatch({type: ADD_TODO, payload: {no, text}});
};
export const checkTodo = (no) => async dispatch => {
  const result = await axios.put(host + '/todo/' + no + '/checked');
  if (result.data.isSuccess) {
    const checked = result.data.checked;
    dispatch({type: CHECK_TODO, payload: {no, checked}});
  }
};
export const removeTodo = (no) => async dispatch => {
  const result = await axios.delete(host + '/todo/' + no);
  if (result.data.isSuccess) {
    dispatch({type: REMOVE_TODO, payload: {no}});
  }
};

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
