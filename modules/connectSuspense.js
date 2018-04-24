import React from 'react';
import { Consumer } from './Consumer';

export function connectSuspense(coroutine) {
  return function SuspenseWrapper(props) {
    return (
      <Consumer>
        {(store) => coroutine(Object.assign({}, store, props))}
      </Consumer>
    );
  }
}
