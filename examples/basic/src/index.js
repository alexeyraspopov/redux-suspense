import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import StargazerListContainer from './StargazerListContainer.react';

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <StargazerListContainer repository="alexeyraspopov/react-coroutine" />
  </Provider>,
  document.querySelector('main')
);
