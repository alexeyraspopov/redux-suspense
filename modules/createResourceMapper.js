export function createResourceMapper(stateMapper, actionDispatcher, shouldDispatch = isNullable) {
  function read(state, dispatch, ...variables) {
    let results = stateMapper(state, ...variables);

    if (shouldDispatch(results)) {
      throw actionDispatcher(dispatch, ...variables);
    }

    return results;
  }

  return { read };
}

function isNullable(value) {
  return value === null || typeof value === 'undefined';
}
