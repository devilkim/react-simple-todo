import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

const configure = () => {
  return createStore(modules, applyMiddleware());
}

export default configure;
