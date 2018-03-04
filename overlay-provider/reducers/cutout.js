import * as actions from '../actions/cutout'

const defaultState = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}

export default (
  state = defaultState,
  {
    type,
    payload: {
      top,
      left,
      bottom,
      right,
      height,
      width,
    } = {},
  },
) => {
  switch (type) {
    case actions.CUTOUT_UPDATE:
      return {
        top: top || state.top,
        left: left || state.left,
        bottom: bottom || state.bottom,
        right: right || state.right,
        height: height || state.height,
        width: width || state.width,
      }
    default:
      return state
  }
}
