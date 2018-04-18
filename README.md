# Redux Suspense

    npm install redux-suspense

## Motivation

This project is an experiment that aims at finding a way to integrate existing
data flow (built with Redux) with upcoming React Suspense feature. The idea
behind proposed implementation is to reduce the amount of imperative logic
required for coupling Redux store to data fetched from the server side.

A components reads data from store in the same synchronous way as before. If
data is not available (not yet fetched) in the rendering phase, an effect is
thrown out of component so React suspend the render till the effect (scheduled
data fetching) is complete. After, React renders the component again with
necessary data available in store.

The important part of the mechanism is that developers do not need to specify
such logic in `componentDidMount()` explicitly as it is needed now. However,
the top-level logic remains the same.

## API

    import { createResourceMapper } from 'redux-suspense';

Resource mapper combines a state selector function and action creator in order
to provide frictionless method to query async data from store.

    import { connectSuspense } from 'redux-suspense';

Suspense connector is a HOC built on top of `connect()` in order to inject the
state tree and dispatch function that is going to be used by a resource mapper.
