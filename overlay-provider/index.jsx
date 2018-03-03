import createOverlayStore from './store'
import { defaultReducers } from './reducers'
import bindDispatchToEvents from './api'

import OverlayProvider, { DefaultOverlayProvider } from './OverlayProvider'
import Notifications from './Notifications'

export {
  createOverlayStore,
  defaultReducers,
  bindDispatchToEvents,
  OverlayProvider,
  Notifications,
}

export default DefaultOverlayProvider
