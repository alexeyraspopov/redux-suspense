import { Component } from 'react';
import { connect } from 'react-redux';

export function connectSuspense(coroutine) {
  class SuspenseContainer extends Component {
    componentDidCatch(effect) {
      if (effect instanceof Promise) {
        // TODO: implement me
      } else {
        throw effect;
      }
    }

    render() {
      return coroutine(this.props);
    }
  }

  return connect()(SuspenseContainer);
}
