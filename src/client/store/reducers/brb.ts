import { BRBStatus } from '../../types'
import * as actions from '../actions/brb'

export type BRBState = BRBStatus

const defaultState: BRBState = {
  away: false,
  message: undefined,
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state: BRBState = defaultState, action: actions.BRBActions): BRBState => {
  switch (action.type) {
    case actions.BRB_UPDATE:
      return {
        away: !!action.payload.away,
        message: action.payload.message,
      }
    default:
      return state
  }
}
