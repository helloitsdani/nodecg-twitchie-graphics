import { h } from 'preact'
import { Provider } from 'preact-redux'

import createOverlayStore from './store'
import reducers, { defaultReducers } from './reducers'
import bindDispatchToEvents from './api'

const OverlayProvider = ({
  store,
  children,
}) => (
  <Provider store={store}>
    <div id="overlay">
      {children}
    </div>
  </Provider>
)

const DefaultOverlayProvider = ({
  children,
}) => {
  const store = createOverlayStore(reducers)
  bindDispatchToEvents(store.dispatch)

  return (
    <OverlayProvider store={store}>
      {children}
    </OverlayProvider>
  )
}

export {
  createOverlayStore,
  defaultReducers,
  bindDispatchToEvents,
  OverlayProvider,
}

export default DefaultOverlayProvider
