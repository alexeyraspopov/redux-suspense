# Redux Suspense Reddit API Example

This code example is basically [Reddit API Advanced Example](https://redux.js.org/advanced/example-reddit-api)
from Redux docs. It was modified to show an alternative approach using Suspense.

Run the example:

    npm start

Code to read:

 * [`SuspenseApp.js`](./src/containers/SuspenseApp.js)
 * [`PostsContainer.js`](./src/containers/PostsContainer.js)
 * [`postsMapper.js`](./src/mappers/postsMapper.js)

## Difference from the original Reddit API Example

 * **No `isFetching` flag needed in Redux store.** Loading state is handled by
 `Placeholder` component. The component takes responsibility of showing loading
 spinner (or another pending state content) only if necessary data is not
 available after defined period of time.
 * **No `componentDidMount()`.** This reduces cognitive load from containers
 code and makes them look similar to containers with sync data. Rendering logic
 is not mixed with side effects and I/O related logic.
 * **The same reducers and actions.** The only thing that different is the
 approach to define containers that depend on async data.
