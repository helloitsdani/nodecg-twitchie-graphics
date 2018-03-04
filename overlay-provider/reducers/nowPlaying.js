import * as actions from '../actions/nowPlaying'

const defaultState = 'Nothing...yet!'

export default (
  state = defaultState,
  {
    type,
    payload: {
      game,
    } = {},
  },
) => {
  switch (type) {
    case actions.NOW_PLAYING_UPDATE:
      return game || defaultState
    default:
      return state
  }
}
