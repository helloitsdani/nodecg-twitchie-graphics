import { Cutout } from '../../types'
import * as actions from '../actions/cutout'

export type CutoutState = Cutout

const defaultState: CutoutState = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 0,
  width: 0,
}

export default (state: CutoutState = defaultState, action: actions.CutoutActions): CutoutState => {
  switch (action.type) {
    case actions.CUTOUT_UPDATE:
      return {
        top: action.payload.top || state.top,
        left: action.payload.left || state.left,
        bottom: action.payload.bottom || state.bottom,
        right: action.payload.right || state.right,
        height: action.payload.height || state.height,
        width: action.payload.width || state.width,
      }
    default:
      return state
  }
}
