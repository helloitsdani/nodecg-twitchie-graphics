import * as actions from '../actions/channel'

const defaultState = {
  game: 'Nothing...yet!',
  status: undefined,
}

export default (
  state = defaultState,
  {
    type,
    payload: {
      game,
      status,
    } = {},
  },
) => {
  switch (type) {
    case actions.CHANNEL_UPDATE:
      return {
        game,
        status,
      }
    default:
      return state
  }
}
