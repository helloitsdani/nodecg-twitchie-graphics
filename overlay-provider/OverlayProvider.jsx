import { h } from 'preact'
import { Provider } from 'preact-redux'
import { combineReducers } from 'redux'

import * as defaultReducers from './reducers'
import createOverlayStore from './store'
import bindDispatchToAPIEvents from './api'

const OverlayProvider = ({
  reducers,
  callback,
  middleware,
  children,
}) => {
  const currentReducers = reducers ? {
    ...defaultReducers,
    ...reducers,
  } : {
    ...defaultReducers,
  }

  const store = createOverlayStore(
    combineReducers(currentReducers),
    middleware,
  )

  bindDispatchToAPIEvents(store)

  if (callback) {
    callback(store)
  }

  return (
    <Provider store={store}>
      <div id="overlay">
        {children}
      </div>
    </Provider>
  )
}

export default OverlayProvider
