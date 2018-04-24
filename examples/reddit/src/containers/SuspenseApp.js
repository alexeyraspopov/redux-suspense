import React from 'react';
import { Placeholder, connectSuspense } from 'redux-suspense';
import { selectSubreddit, invalidateSubreddit } from '../actions';
import Picker from '../components/Picker';
import PostsContainer from './PostsContainer';
import PostsOptimisticContainer from './PostsOptimisticContainer';
import PostsInfo from './PostsInfo';

export default connectSuspense(SuspenseApp);

function SuspenseApp({ state, dispatch }) {
  let selectedSubreddit = state.selectedSubreddit;
  return (
    <section>
      <Picker
        value={selectedSubreddit}
        options={['reactjs', 'frontend']}
        onChange={subreddit => {
          dispatch(invalidateSubreddit(subreddit));
          dispatch(selectSubreddit(subreddit));
        }}
      />

      <PostsInfo subreddit={selectedSubreddit} />

      <Placeholder
        delayMs={0}
        fallback={<PostsOptimisticContainer subreddit={selectedSubreddit} />}>
        <PostsContainer subreddit={selectedSubreddit} />
      </Placeholder>
    </section>
  );
}
