/*~entry point~*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';
import { getReps } from './actions/fetch';

const root = document.getElementById('root');

render(
  <Provider store={store}>
    <App/>
  </Provider>
, root);

store.dispatch(getReps(1));