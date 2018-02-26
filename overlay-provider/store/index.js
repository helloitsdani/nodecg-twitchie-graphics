/* global nodecg */

import { createStore, compose, applyMiddleware } from 'redux'

const createOverlayStore = (reducers) => {
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(),
    ),
  )

  return store
}

export default createOverlayStore
