import channel from './channel'
import social from './social'
import chat from './chat'
import brb from './brb'
import followers from './followers'
import subscribers from './subscribers'
import timer from './timer'

const bindDispatchToAPIEvents = ({
  dispatch,
}) => {
  channel(dispatch)
  social(dispatch)
  brb(dispatch)
  chat(dispatch)
  followers(dispatch)
  subscribers(dispatch)
  timer(dispatch)
}

export default bindDispatchToAPIEvents
