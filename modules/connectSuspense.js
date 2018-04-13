import { Component } from 'react';
import { connect } from 'react-redux';

export function connectSuspense(coroutine) {
  class SuspenseContainer extends Component {
    componentDidCatch(effect) {
      // Rethrow if an effect is not of expected type
      if (!(effect instanceof Promise)) throw effect;
    }

    render() {
      return coroutine(this.props);
    }
  }

  return connect()(SuspenseContainer);
}
