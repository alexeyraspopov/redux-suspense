export function createResourceMapper(stateMapper, actionDispatcher, shouldDispatch = isNullable) {
  function read(state, dispatch, ...variables) {
    let results = stateMapper(state, ...variables);
    return shouldDispatch(results) ? doDispatch(dispatch, variables) : results;
  }

  function doDispatch(dispatch, variables) {
    throw actionDispatcher(dispatch, ...variables);
  }

  function peek(state, ...variables) {
    return stateMapper(state, ...variables);
  }

  function preload(dispatch, ...variables) {
    return actionDispatcher(dispatch, ...variables);
  }

  return { read, peek, preload };
}

function isNullable(value) {
  return value === null || typeof value === 'undefined';
}
