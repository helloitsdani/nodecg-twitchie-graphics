import twitchie from '../../twitchie'

import { updateTimer } from '../actions/timer'

export default (dispatch) => {
  const dispatchUpdateTimer = (timer) => {
    dispatch(updateTimer(timer))
  }

  twitchie.timer.on(
    'change',
    dispatchUpdateTimer,
  )
}
