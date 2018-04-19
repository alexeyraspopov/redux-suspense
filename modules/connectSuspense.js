import Placeholder, { PlaceholderContext } from '../components/Placeholder';
import { connect } from 'react-redux';

export default function connectSuspense(coroutine) {
  function SuspenseWrapper(props) {
    return (
      <PlaceholderContext.Consumer>
        {(trigger) => {
          if (!trigger) {
            return (
              <Placeholder ms={0} fallback={null}>
                <SuspenseWrapper {...props} />
              </Placeholder>
            );
          }

          try {
            return coroutine(props);
          } catch (effect) {
            if (effect instanceof Promise) {
              trigger(true);
              effect.then(() => trigger(false));
            } else {
              throw effect;
            }
            return null;
          }
        }}
      </PlaceholderContext.Consumer>
    );
  }

  return connect(state => ({ state }))(SuspenseWrapper);
}
