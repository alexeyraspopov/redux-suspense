# Redux Suspense

    npm install redux-suspense

## About

This project is an experiment that aims at finding a way to integrate existing
data flow (built with Redux) with upcoming React Suspense feature. The idea
behind proposed implementation is to reduce the amount of imperative logic
required for coupling Redux store to data fetched from the server side.

When using `react-redux`, developers create containers that synchronously read
data from the store. In cases where data need to be loaded from the server,
developers define `componentDidMount()` lifecycle method where by checking data
presence they can dispatch necessary action that triggers data fetching. Once
data arrived, a containers gets re-rendered assuming that the required data can
now be read from the store.

When using `redux-suspense`, components read data from the store in the same
synchronous way as before. If data is not available (not yet fetched) in the
rendering phase, an "effect" is thrown out of component so React suspends the
render till the effect (scheduled data fetching) is complete. After, React
renders the component again with necessary data available in store.

The important part of the mechanism is that developers do not need to specify
such logic in `componentDidMount()` explicitly every time, as it is needed now.
However, the top-level logic remains the same. Current implementation hides
this aspect from developers so it can be done in the most efficient way and
updated with newer versions of React without forcing developers to refactor
existing code.

_Note: this project is an experiment. I encourage you to try, though
carefully consider undiscovered bugs before using in your real projects._

## API

    import { createResourceMapper } from 'redux-suspense';

Resource mapper combines a state selector function and action creator in order
to provide frictionless method to query async data from store.

    import { connectSuspense } from 'redux-suspense';

Suspense connector is a higher-order component built on top of `connect()` in
order to inject the state tree and dispatch function that is going to be used
by a resource mapper.

    import { Consumer } from 'redux-suspense';

The same connector as `connectSuspense()` but done with render prop pattern
instead of higher-order component. No difference other than the pattern.

    import { Placeholder } from 'redux-suspense';

A component wrapper that allows to show alternative content if async children
can't render their content in defined time frame.

## Examples

In `examples` folder you can find [Reddit API Example][reddit-example] which is
basically an [original advanced example][reddit-example-original] improved by
`redux-suspense`. In addition, [Basic Example][basic-example] shows the minimal
code implementation with tests.

 [reddit-example]: https://github.com/alexeyraspopov/redux-suspense/tree/master/examples/reddit
 [reddit-example-original]: https://redux.js.org/advanced/example-reddit-api
 [basic-example]: https://github.com/alexeyraspopov/redux-suspense/tree/master/examples/basic
