import * as actions from '../actions/timer'

const defaultState = null

export default (
  state = defaultState,
  {
    type,
    payload: {
      target,
    } = {},
  },
) => {
  switch (type) {
    case actions.TIMER_UPDATE:
      return target
    case actions.TIMER_CLEAR:
      return defaultState
    default:
      return state
  }
}
