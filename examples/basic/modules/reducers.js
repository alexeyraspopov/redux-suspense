import { combineReducers } from 'redux';

export default combineReducers({ stargazers });

function stargazers(state = {}, action) {
  switch (action.type) {
    case 'STARGAZERS_RECEIVED':
      return Object.assign({}, state, {
        [action.repository]: action.stargazers,
      });
    default:
      return state;
  }
}
