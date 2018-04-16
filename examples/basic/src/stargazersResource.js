import { createResourceMapper } from 'redux-suspense';
import stargazersFetcher from './stargazersFetcher';

export default createResourceMapper(
  (state, repository) => state.stargazers[repository],
  (dispatch, repository) => {
    return stargazersFetcher(repository).then(stargazers => {
      dispatch({ type: 'STARGAZERS_RECEIVED', stargazers, repository });
    });
  }
);
