import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore.js';

import { AUTH_SUCCESS } from './actions/auth';

const store = configureStore();

const token = localStorage.getItem('token');


if (token) {
  console.log(token);
  // Update application state. User has token and is probably authenticated
  store.dispatch({ type: AUTH_SUCCESS });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('body'));
