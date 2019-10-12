import { Dispatch } from 'redux'

import twitchie from '../../twitchie'
import { clearTimer, updateTimer } from '../actions/timer'

export default (dispatch: Dispatch) => {
  twitchie.graphics.timer.on('change', newTimer => {
    if (!newTimer) {
      dispatch(clearTimer())
      return
    }

    dispatch(updateTimer(newTimer))
  })
}
