import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import modules from './modules';

const configure = () => {
  return createStore(modules, applyMiddleware(ReduxThunk));
}

export default configure;
