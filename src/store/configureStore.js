import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, createLogger()));
}

export default configureStore;