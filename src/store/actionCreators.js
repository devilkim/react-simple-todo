import { bindActionCreators } from 'redux';

import * as todoActions from './modules/todo';

import store from './index';

const { dispatch } = store;

export const TodoActions = bindActionCreators(todoActions, dispatch);
