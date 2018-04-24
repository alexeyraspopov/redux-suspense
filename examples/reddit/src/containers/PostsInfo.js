import React from 'react';
import { connectSuspense } from 'redux-suspense';
import postsMapper from '../mappers/postsMapper';

export default connectSuspense(PostsInfo);

function PostsInfo({ state, subreddit }) {
  let posts = postsMapper.peek(state, subreddit);
  return (
    <div>
      {posts && `Last updated at ${new Date(posts.lastUpdated).toLocaleTimeString()}.`}
    </div>
  );
}
