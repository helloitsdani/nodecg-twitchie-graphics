import * as actions from '../actions/brb'

const defaultState = {
  away: false,
  message: undefined,
}

export default (
  state = defaultState,
  {
    type,
    payload: {
      away,
      message,
    } = {},
  },
) => {
  switch (type) {
    case actions.BRB_UPDATE:
      return {
        away: away || false,
        message,
      }
    default:
      return state
  }
}
