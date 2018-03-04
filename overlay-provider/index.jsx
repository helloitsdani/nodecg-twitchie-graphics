import * as actions from './actions'
import createOverlayStore from './store'
import { defaultReducers } from './reducers'
import bindDispatchToEvents from './api'

import OverlayProvider, { DefaultOverlayProvider } from './OverlayProvider'
import Notifications from './Notifications'

export {
  actions,
  createOverlayStore,
  defaultReducers,
  bindDispatchToEvents,
  OverlayProvider,
  Notifications,
}

export default DefaultOverlayProvider
