import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import SuspenseApp from './containers/SuspenseApp';

const store = configureStore();

render(
  <Provider store={store}>
    <SuspenseApp />
  </Provider>,
  document.querySelector('main')
);
