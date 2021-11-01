import configureStore from './configureStore';

export function createStore(initialState) {
  global.store = configureStore(initialState);
  return global.store;
}

export function getStore() {
  return global.store;
}