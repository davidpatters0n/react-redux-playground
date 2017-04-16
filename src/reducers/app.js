import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todos from './todos';
import toggleFilter from './toggle-filter';

const appReducer = combineReducers({
  todos,
  toggleFilter,
  router: routerReducer
});

export default appReducer;
