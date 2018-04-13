export function createResourceDispatcher(stateMapper, actionDispatcher, shouldDispatch = isNullable) {
  function load(state, dispatch, ...variables) {
    let results = stateMapper(state, ...variables);

    if (shouldDispatch(results)) {
      throw actionDispatcher(dispatch, ...variables);
    }

    return results;
  }

  return { load };
}

function isNullable(value) {
  return value === null || typeof value === 'undefined';
}
