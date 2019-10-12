import { applyMiddleware, combineReducers, compose, createStore, Middleware, Reducer, Store } from 'redux'

import bindDispatchToAPIEvents from './api'
import * as defaultReducers from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
}

const createTwitchieStore = (reducers?: Reducer, middleware?: Middleware[]): Store<defaultReducers.OverlayState> => {
  const currentReducers = reducers
    ? {
        ...defaultReducers,
        ...reducers,
      }
    : {
        ...defaultReducers,
      }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    combineReducers(currentReducers),
    composeEnhancers(middleware ? applyMiddleware(...middleware) : applyMiddleware())
  )

  bindDispatchToAPIEvents(store)
  return store
}

export default createTwitchieStore
