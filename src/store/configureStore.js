import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { initSagas } from './initSagas';

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware, thunk];
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(...middleWares, createLogger())
    )
  );

  initSagas(sagaMiddleware);
  return store;
}

export default configureStore;