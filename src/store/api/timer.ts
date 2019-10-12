import { Dispatch } from 'redux'

import twitchie from '../../twitchie'
import { clearTimerAction, updateTimerAction } from '../actions/timer'

export default (dispatch: Dispatch) => {
  twitchie.graphics.timer.on('change', newTimer => {
    if (!newTimer) {
      dispatch(clearTimerAction())
      return
    }

    dispatch(updateTimerAction(newTimer))
  })
}
