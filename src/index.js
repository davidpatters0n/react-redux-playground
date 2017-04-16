import React from 'react';
import ReactDOM from 'react-dom';

import { Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from './store'

import App from './components/app/App';
import Todos from './components/todos/index';
import Todo from './components/todo/index';

import './index.css';

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/todos" component={Todos}></Route>
        <Route path="/todos/:id" component={Todo}></Route>
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
