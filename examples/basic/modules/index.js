import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import StargazerListContainer from './StargazerListContainer.react';

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <StargazerListContainer repository="alexeyraspopov/react-coroutine" />
  </Provider>,
  document.querySelector('main')
);
