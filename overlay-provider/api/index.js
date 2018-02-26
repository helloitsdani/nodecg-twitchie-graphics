import nowPlaying from './nowPlaying'
import social from './social'
import chat from './chat'
import brb from './brb'
import followers from './followers'
import subscribers from './subscribers'

export default (dispatch) => {
  nowPlaying(dispatch)
  social(dispatch)
  brb(dispatch)
  chat(dispatch)
  followers(dispatch)
  subscribers(dispatch)
}
