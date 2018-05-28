import * as actions from '../actions/brb'

const defaultState = {
  away: false,
  message: undefined,
  timer: undefined,
}

export default (
  state = defaultState,
  {
    type,
    payload: {
      away,
      message,
      timer,
    } = {},
  },
) => {
  switch (type) {
    case actions.BRB_UPDATE:
      return {
        away: !!away,
        message,
        timer,
      }
    default:
      return state
  }
}
