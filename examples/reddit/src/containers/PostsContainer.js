import React from 'react';
import { connectSuspense } from 'redux-suspense';
import postsMapper from '../mappers/postsMapper';
import Posts from '../components/Posts';

export default connectSuspense(PostsContainer);

function PostsContainer({ state, dispatch, subreddit }) {
  let { items: posts } = postsMapper.read(state, dispatch, subreddit);
  return (
    <section>
      <Posts posts={posts} />
    </section>
  );
}
