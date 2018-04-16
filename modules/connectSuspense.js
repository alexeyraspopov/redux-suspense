import { Component } from 'react';
import { connect } from 'react-redux';

export function connectSuspense(coroutine) {
  class Suspense extends Component {
    constructor(props) {
      super(props);
      this.state = { pending: false };
    }

    render() {
      if (this.state.pending) {
        return null;
      }

      try {
        return coroutine(this.props);
      } catch (effect) {
        if (effect instanceof Promise) {
          Promise.resolve().then(() => this.setState({ pending: true }));
          effect.then(() => this.setState({ pending: false }));
        }
        return null;
      }
    }
  }

  return connect(state => ({ state }))(Suspense);
}
