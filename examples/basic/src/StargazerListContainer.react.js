import React from 'react';
import { connectSuspense } from 'redux-suspense';
import stargazersResource from './stargazersResource';
import StargazerList from './StargazerList.react';

export default connectSuspense(StargazerListContainer);

function StargazerListContainer({ state, dispatch, repository }) {
  let stargazers = stargazersResource.read(state, dispatch, repository);
  return <StargazerList stargazers={stargazers} />;
}
