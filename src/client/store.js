import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import allReducers from './reducers/index';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  console.log('next state', store.getState());
  console.groupEnd();
  return next(action);
};

const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};

const store = createStore(
  allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware,
    logger,
    crashReporter
  ),
);

export default store;
