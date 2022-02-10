import { type Dispatch } from 'redux'

import brb from './brb'
import chat from './chat'
import followers from './followers'
import game from './game'
import social from './social'
import subscribers from './subscribers'
import timer from './timer'
import stream from './stream'

const bindDispatchToAPIEvents = ({ dispatch }: { dispatch: Dispatch }) => {
  game(dispatch)
  social(dispatch)
  brb(dispatch)
  chat(dispatch)
  followers(dispatch)
  subscribers(dispatch)
  timer(dispatch)
  stream(dispatch)
}

export default bindDispatchToAPIEvents
