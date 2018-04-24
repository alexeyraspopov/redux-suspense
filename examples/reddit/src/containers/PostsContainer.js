import React from 'react';
import { Consumer } from 'redux-suspense';
import postsMapper from '../mappers/postsMapper';
import Posts from '../components/Posts';

export default function PostsContainer({ subreddit }) {
  return (
    <Consumer>
      {({ state, dispatch }) => {
        let { items: posts } = postsMapper.read(state, dispatch, subreddit);
        return (
          <section>
            <Posts posts={posts} />
          </section>
        );
      }}
    </Consumer>
  );
}
