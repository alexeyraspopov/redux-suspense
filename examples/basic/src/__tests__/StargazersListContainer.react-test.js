import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import configureStore from '../configureStore';
import { Provider } from 'react-redux';
import StargazerListContainer from '../StargazerListContainer.react';

test('precached data render', () => {
  let state = {
    stargazers: {
      'alexeyraspopov/react-coroutine': [
        {
          login: 'alexeyraspopov',
          html_url: 'https://github.com/alexeyraspopov',
        },
        {
          login: 'istarkov',
          html_url: 'https://github.com/istarkov',
        },
        {
          login: 'terrysahaidak',
          html_url: 'https://github.com/terrysahaidak',
        },
        {
          login: 'RReverser',
          html_url: 'https://github.com/RReverser',
        },
      ],
    },
  };
  let store = configureStore(state);
  let output = ReactTestRenderer.create(
    <Provider store={store}>
      <StargazerListContainer repository="alexeyraspopov/react-coroutine" />
    </Provider>
  );
  expect(output).toMatchSnapshot();
});
