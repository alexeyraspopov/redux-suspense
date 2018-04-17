# redux-suspense

    npm install redux-suspense

## Motivation

This project is an experiment that aims at finding a way to integrate existing
data flow (built with Redux) with upcoming React Suspense feature.

## API

    import { createResourceMapper } from 'redux-suspense';

Resource mapper combines a state selector function and action creator in order
to provide frictionless method to query async data from store.

    import { connectSuspense } from 'redux-suspense';

Suspense connector is a HOC built on top of `connect()` in order to inject the
state tree and dispatch function that is going to be used by a resource mapper.
