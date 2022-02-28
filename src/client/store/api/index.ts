import { type Dispatch } from 'redux'

import brb from './brb'
import chat from './chat'
import game from './game'
import social from './social'
import notifications from './notifications'
import timer from './timer'
import stream from './stream'

const bindDispatchToAPIEvents = ({ dispatch }: { dispatch: Dispatch }) => {
  game(dispatch)
  social(dispatch)
  brb(dispatch)
  chat(dispatch)
  notifications(dispatch)
  timer(dispatch)
  stream(dispatch)
}

export default bindDispatchToAPIEvents
