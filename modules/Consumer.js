import React from 'react';
import { Placeholder, PlaceholderContext } from './Placeholder';
import { connect } from 'react-redux';

export let Consumer = connect(stateIdentity)(StoreConsumer);

function stateIdentity(state) {
  return { state };
}

function StoreConsumer({ state, dispatch, children }) {
  return (
    <PlaceholderContext.Consumer>
      {(trigger) => {
        if (!trigger) {
          return (
            <Placeholder delayMs={0} fallback={null}>
              <StoreConsumer {...{ state, dispatch, children }} />
            </Placeholder>
          );
        }

        try {
          return children({ state, dispatch });
        } catch (effect) {
          if (effect instanceof Promise) {
            trigger(true);
            effect.then(() => trigger(false), () => trigger(false));
            return null;
          }

          throw effect;
        }
      }}
    </PlaceholderContext.Consumer>
  );
}
