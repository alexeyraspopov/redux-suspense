import React, { Component, createContext } from 'react';

export let PlaceholderContext = createContext();

export default class Placeholder extends Component {
  state = { timer: null, expired: false };

  trigger = shouldSetTimer => {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }

    if (shouldSetTimer) {
      let timer = setTimeout(() => {
        this.setState({ timer: null, expired: true });
      }, this.props.delayMs);

      this.setState({ timer });
    } else {
      this.setState({ timer: null, expired: false });
    }
  };

  render() {
    return (
      <PlaceholderContext.Provider value={this.trigger}>
        {this.state.expired
          ? this.props.fallback
          : this.state.timer ? null : this.props.children}
      </PlaceholderContext.Provider>
    );
  }
}
