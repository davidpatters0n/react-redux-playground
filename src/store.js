import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import appReducer from './reducers/app';

import todos from './data/todos';

export const history = createHistory()

const middleware = routerMiddleware(history);

const defaultState = { todos } // Prefill with existing data

const store = createStore(
  appReducer,
  defaultState,
  applyMiddleware(middleware)
);

export default store;
