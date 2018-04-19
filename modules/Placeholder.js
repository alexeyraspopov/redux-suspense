import React, { Component, createContext } from 'react';

export let PlaceholderContext = createContext();

export class Placeholder extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: null, expired: props.delayMs === 0 };
    this.trigger = this.trigger.bind(this);
  }

  trigger(shouldSetTimer) {
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
  }

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
