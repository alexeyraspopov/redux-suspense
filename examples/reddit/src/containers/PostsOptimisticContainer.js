import React from 'react';
import { Consumer } from 'redux-suspense';
import postsMapper from '../mappers/postsMapper';
import Posts from '../components/Posts';

export default function PostsOptimisticContainer({ subreddit }) {
  return (
    <Consumer>
      {({ state }) => {
        let posts = postsMapper.peek(state, subreddit);
        if (!posts || posts.items.length === 0) {
          return <p>Loading...</p>;
        }
        return (
          <section style={{ opacity: 0.5 }}>
            <Posts posts={posts.items} />
          </section>
        );
      }}
    </Consumer>
  );
}
