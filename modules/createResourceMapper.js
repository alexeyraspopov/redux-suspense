export function createResourceMapper(stateMapper, actionDispatcher, shouldDispatch = isNullable) {
  function read(state, dispatch, ...variables) {
    let results = stateMapper(state, ...variables);

    if (shouldDispatch(results)) {
      throw actionDispatcher(dispatch, ...variables);
    }

    return results;
  }

  function peek(state, ...variables) {
    return stateMapper(state, ...variables);
  }

  return { read, peek };
}

function isNullable(value) {
  return value === null || typeof value === 'undefined';
}
