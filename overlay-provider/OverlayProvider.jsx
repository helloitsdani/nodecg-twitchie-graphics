import { h } from 'preact'
import { Provider } from 'preact-redux'

import reducers from './reducers'
import createOverlayStore from './store'
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
  DefaultOverlayProvider,
}

export default OverlayProvider
