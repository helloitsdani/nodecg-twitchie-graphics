import { Timer } from '../../types'
import * as actions from '../actions/timer'

export type TimerState = Timer | null

const defaultState: TimerState = null

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state: TimerState = defaultState, action: actions.TimerActions): TimerState => {
  switch (action.type) {
    case actions.TIMER_UPDATE:
      return action.payload
    case actions.TIMER_CLEAR:
      return defaultState
    default:
      return state
  }
}
