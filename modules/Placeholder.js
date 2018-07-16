import React, { Component, createContext } from 'react';

export let PlaceholderContext = createContext();

export class Placeholder extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: null, expired: false, cache: null };
    this.trigger = this.trigger.bind(this);
  }

  trigger(shouldSetTimer) {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }

    if (shouldSetTimer) {
      let timer = setTimeout(() => {
        this.setState({ timer: null, expired: true, cache: null });
      }, this.props.delayMs);

      this.setState({ timer });
    } else {
      this.setState({ timer: null, expired: false, cache: this.props.children });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  render() {
    return (
      <PlaceholderContext.Provider value={this.trigger}>
        {this.state.expired
          ? this.props.fallback
          : this.state.timer ? this.state.cache : this.props.children}
      </PlaceholderContext.Provider>
    );
  }
}
