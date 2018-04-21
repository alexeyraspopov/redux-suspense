import { createResourceMapper } from 'redux-suspense';
import { fetchPosts } from '../actions';

let postsMapper = createResourceMapper(
  // state selector
  (state, subreddit) => state.postsBySubreddit[subreddit],
  // action creator
  (dispatch, subreddit) => dispatch(fetchPosts(subreddit)),
  // should dispatch predicate
  posts => !posts || posts.didInvalidate
);

export default postsMapper;
