import { FunctionComponent, h } from 'preact'
import { Provider } from 'preact-redux'
import { combineReducers, Middleware, Reducer, Store } from 'redux'

import bindDispatchToAPIEvents from './api'
import * as defaultReducers from './reducers'
import createOverlayStore from './store'

import notificationMiddleware from './middleware/notifications'

interface OverlayProviderProps {
  reducers?: Reducer
  callback?: (store: Store) => void
  middleware?: Middleware[]
}

const OverlayProvider: FunctionComponent<OverlayProviderProps> = ({ reducers, callback, middleware, children }) => {
  const currentReducers = reducers
    ? {
        ...defaultReducers,
        ...reducers,
      }
    : {
        ...defaultReducers,
      }

  const currentMiddleware: Middleware[] = [notificationMiddleware, ...(middleware || [])]

  const store = createOverlayStore(combineReducers(currentReducers), currentMiddleware)

  bindDispatchToAPIEvents(store)

  if (callback) {
    callback(store)
  }

  return (
    <Provider store={store}>
      <div id="overlay">{children}</div>
    </Provider>
  )
}

export default OverlayProvider
