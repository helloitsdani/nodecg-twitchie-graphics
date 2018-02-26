import { combineReducers } from 'redux'

import nowPlaying from './nowPlaying'
import social from './social'
import brb from './brb'
import chat from './chat'
import cutout from './cutout'
import notifications from './notifications'

const defaultReducers = {
  brb,
  social,
  nowPlaying,
  chat,
  cutout,
  notifications,
}

export {
  defaultReducers,
}

export default combineReducers(defaultReducers)
