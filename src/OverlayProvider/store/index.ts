import { applyMiddleware, compose, createStore, Middleware, Reducer } from 'redux'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
}

const createOverlayStore = (reducers: Reducer, middleware?: Middleware[]) => {
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(reducers, composeEnhancers(middleware ? applyMiddleware(...middleware) : applyMiddleware()))
}

export default createOverlayStore
